const DECLUSION_CASE = ["ป", "ทุ", "ต", "จ", "ป", "ฉ", "ส", "อา"] as const;
const DECLUSION_COUNT = ["เอก", "พหุ"] as const;
const DECLUSION = DECLUSION_CASE.flatMap((v1) =>
  DECLUSION_COUNT.map((v2) => `${v1}-${v2}` as const)
);
const GENDERS = ["ปุ", "นปุ", "อิต"] as const;
const PART_OF_SPEECH = ["น", "ก", "ว"] as const;
type DeclusionCase = (typeof DECLUSION_CASE)[number];
type DeclusionCount = (typeof DECLUSION_COUNT)[number];
type Declusion = (typeof DECLUSION)[number];
type Gender = (typeof GENDERS)[number];
type PartOfSpeech = (typeof PART_OF_SPEECH)[number];

export class PaliToken {
  token: string;
  gender: Gender = undefined;
  declusion_case: DeclusionCase = undefined;
  declusion_count: DeclusionCount = undefined;
  part_of_speech: PartOfSpeech = undefined;
  get declension(): Declusion | undefined {
    const v1 = this.declusion_case;
    const v2 = this.declusion_count;
    return v1 && v2 ? `${v1}-${v2}` : undefined;
  }
  set declension(val: Declusion) {
    const [v1, v2] = val.split("-");
    this.declusion_case = v1 as DeclusionCase;
    this.declusion_count = v2 as DeclusionCount;
  }
  // https://palistudies.blogspot.com/2018/06/declension-of-pali-nouns.html
  // gender?: "masculine" | "feminine" | "neuter"; // Masculine	Neuter	Feminine
  // number?: "singular" | "plural"
  // case?: "nom" | "acc" | "ins" | "abl" | "gen" | "dat" | "loc" | "voc"

  //      สิ-โย   อํ-โย                                    นา-หิ
  //      ปฐมา   ทุติยา    ตติยา   ปัญจมี   [จตุตถี or ฉัฏฐี] สัตตมี    อาลปน
  // Nominative, showing the Subject of a finite verb. = กัตตา ผู้กระทำ ปฐมา ป.1 สิ-โย
  // Accusative, this is the Direct object of a transitive verb. = กัมม สิ่งที่ถูกทำ ทุ.2 อํ-โย
  // Instrumentive, shows the object or person with or by whom something is performed. = กรณ เครื่องทำ ตติยา.3 นา-หิ
  // Dative, showing the Indirect object or person to or for whom something is given or done. = สัมปทาน ผู้รับมอบ จ.4 ส-นํ
  // Ablative, generally showing separation, expressed by from. = อปาทาน ที่ที่จากไป ป.5 สฺมา-หิ
  // Genitive, showing possession (of 's). = สามีสัมพันธ ความเป็นเจ้าของ ฉ.6 ส-นํ
  // Locative, showing place (in, on, at, upon, etc.). = โอกาส สถานที่-เวลาที่ทำ สัตตมี.7 สมิํ-สุ
  // Vocative, used in addressing persons. = อาลปน คำร้องเรียก อาลปน สิ-โย
  tags: string[] = [];
  info: string[] = [];
  constructor(token: string, attrs: Partial<PaliToken> = {}) {
    this.token = token;
    this.mut_update(attrs);
  }
  clone() {
    return new PaliToken(this.token, structuredClone(this));
  }
  mut_update(obj: Partial<PaliToken>): this;
  mut_update(fn: (obj: this) => void): this;
  mut_update(fnOrObj) {
    if (typeof fnOrObj === "function") {
      fnOrObj(this);
    } else {
      const { tags = [], info = [], ...rest } = fnOrObj;
      Object.assign(this, rest);
      this.tags.push(...tags);
      this.info.push(...info);
    }
    return this;
  }
  private mut_replace_end(tok: `${string}-${string}`): this {
    let is_executed = false;
    this.token = this.token.replace(
      /([เโ])?([ก-ฮ])([าิีุู])?$/,
      (_, v1 = "", con, v2 = "") => {
        is_executed = true;
        return tok.replace("-", con);
      }
    );

    if (!is_executed)
      throw new Error(`can not replace_end ${this.token} ${tok}`);
    return this;
  }
  get stems_end(): `${string}อ${string}` {
    let mat = /([เโ])?[ก-ฮ]([าิีุู])?$/.exec(this.token);
    if (!mat) return;
    if (mat[1]) return `${mat[1]}อ`;
    if (mat[2]) return `อ${mat[2]}`;
    return `อะ`;
  }
  create_full_vipatti_str(raw: TemplateStringsArray) {
    const rows = raw[0].trim().replace(/[;\.\s]+$/, '').split(/[;\.]+/g).map(s => s.trim());
    const res = rows.map((s) => s.trim().split(/[,\s]+/g));
    if (res.length != 16 && res.length != 14)
      throw new Error(
        `expect vipat to be .length = 16|14, got .length = ${rows.length}; ${JSON.stringify(rows, undefined, 2)}`
      );
    return this.create_full_vipatti_arr(res);
  }
  create_full_vipatti_arr(arr: string[][]): PaliToken[] {
    if (arr.length != 16 && arr.length != 14)
      throw new Error(
        `expect full_vipatti to be .length = 16 got ${
          arr.length
        }; ${JSON.stringify(arr)}`
      );
    return arr.flatMap((tokens, i) => {
      return tokens.map((ending) =>
        (ending.includes("-")
          ? this.clone().mut_replace_end(ending as any)
          : this.clone().mut_update({ token: ending })
        )
          .mut_update({ declension: DECLUSION[i], tags: [`<${this.token}>`] })
          .mut_update((it) => {
            const idx = it.tags.indexOf("ลิงค์");
            if (idx !== -1) {
              it.tags.splice(idx, 1);
              it.part_of_speech = "น";
            }
          })
      );
    });
  }
  toString() {
    return `PaliToken { ${this.token} ${this.part_of_speech || ""} ${
      this.declension || ""
    } ${this.gender || ""} ${this.tags} }`;
  }
  map<T>(fn: (obj: this) => T): T {
    return fn(this)
  }
}
