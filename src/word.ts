import { PaliToken } from "./pali";

export const data = `
ปุริส -t ลิงค์ -g ปุ -i บุรุษ
อาจาริย -t ลิงค์ -g ปุ -i อาจารย์
กุมาร -t ลิงค์ -g ปุ -i เด็ก
คณ -t ลิงค์ -g ปุ -i หมู่
ชน -t ลิงค์ -g ปุ -i ชน
นร -t ลิงค์ -g ปุ -i คน
ภว -t ลิงค์ -g ปุ -i ภพ
โลก -t ลิงค์ -g ปุ -i โลก
สหาย -t ลิงค์ -g ปุ -i เพื่อน
มุนิ -t ลิงค์ -g ปุ -i มุนี
อคฺคิ -t ลิงค์ -g ปุ -i ไฟ
นิธิ -t ลิงค์ -g ปุ -i ขุมทรัพย์
สมาธิ -t ลิงค์ -g ปุ -i สมาธิ
เสฏฺฐี -t ลิงค์ -g ปุ -i เศรษฐี
โภคี -t ลิงค์ -g ปุ -i คนมีโภคะ
มนฺตี -t ลิงค์ -g ปุ -i คนมีความคิด
เมธาวี -t ลิงค์ -g ปุ -i คนมีปัญญา
สุขี -t ลิงค์ -g ปุ -i คนมีความสุข
ครุ -t ลิงค์ -g ปุ -i ครู
พนฺธุ -t ลิงค์ -g ปุ -i พวกพ้อง
ภิกฺขุ -t ลิงค์ -g ปุ -i ภิกษุ
สตฺตุ -t ลิงค์ -g ปุ -i ศัตรู
เหตุ -t ลิงค์ -g ปุ -i เหตุ
วิญฺญู -t ลิงค์ -g ปุ -i ผู้รู้วิเศษ
กตญฺญู -t ลิงค์ -g ปุ -i ผู้กตัญญู
ปารคู -t ลิงค์ -g ปุ -i ผู้ถึงฝั่ง
เวทคู -t ลิงค์ -g ปุ -i ผู้ถึงเวท
สยมฺภู -t ลิงค์ -g ปุ -i พระผู้เป็นเอง
กญฺญา -t ลิงค์ -g อิต -i นางสาวน้อย
อาภา -t ลิงค์ -g อิต -i รัศมี
โอชา -t ลิงค์ -g อิต -i โอชา
เจตนา -t ลิงค์ -g อิต -i เจตนา
ดารา -t ลิงค์ -g อิต -i ดาว
ธารา -t ลิงค์ -g อิต -i ธารน้ำ
นารา -t ลิงค์ -g อิต -i รัศมี
ปญฺญา -t ลิงค์ -g อิต -i ปัญญา
มาลา -t ลิงค์ -g อิต -i ระเบียบ
สิลา -t ลิงค์ -g อิต -i ศีล
รตฺติ -t ลิงค์ -g อิต -i ราตรี
อิทฺธิ -t ลิงค์ -g อิต -i ฤทธิ์
อิติ -t ลิงค์ -g อิต -i จัญไร
ขนฺติ -t ลิงค์ -g อิต -i ความอดทน
นนฺทิ -t ลิงค์ -g อิต -i ความเพลิดเพลิน
มติ -t ลิงค์ -g อิต -i ความรู้
รติ -t ลิงค์ -g อิต -i ตวามยินดี
ลทฺธิ -t ลิงค์ -g อิต -i ลัทธิ
สนฺติ -t ลิงค์ -g อิต -i ความต่อ
นารี -t ลิงค์ -g อิต -i นารี
กุมารี -t ลิงค์ -g อิต -i เด็กหญิง
ถี -t ลิงค์ -g อิต -i หญิง
ถินี -t ลิงค์ -g อิต -i หญิง
อิตฺถี -t ลิงค์ -g อิต -i หญิง
ปฐวี -t ลิงค์ -g อิต -i แผ่นดิน
มาตุลานี -t ลิงค์ -g อิต -i ป้า/น้า
ธานี -t ลิงค์ -g อิต -i เมือง
รชฺชุ -t ลิงค์ -g อิต -i เชือก
วธู -t ลิงค์ -g อิต -i หญิงสาว
ภู -t ลิงค์ -g อิต -i แผ่นดิน
กุล -t ลิงค์ -g นปุ -i ตระกูล
องฺค -t ลิงค์ -g นปุ องค์
กมล -t ลิงค์ -g นปุ ดอกบัว
ภตฺต -t ลิงค์ -g นปุ ข้าวสวย
มชฺช -t ลิงค์ -g นปุ น้ำเมา
ยนฺต -t ลิงค์ -g นปุ ยนต์
จกฺก -t ลิงค์ -g นปุ จักร/ล้อ
ชล -t ลิงค์ -g นปุ น้ำ
ธน -t ลิงค์ -g นปุ ทรัพย์
รฏฺฐ -t ลิงค์ -g นปุ แว่นแคว้น
รตน -t ลิงค์ -g นปุ แก้ว
อกฺขิ -t ลิงค์ -g นปุ -i นัยน์ตา
วตฺถุ -t ลิงค์ -g นปุ -i วัตถุ
ต -t ลิงค์ -t สรรพนาม -t ปุริสสรรพนาม -i เขา/เธอ/มัน/he/she/it
ตุมฺห -t ลิงค์ -t สรรพนาม -t ปุริสสรรพนาม -i ว่า/ท่าน/คุณ
อมฺห -t ลิงค์ -t สรรพนาม -t ปุริสสรรพนาม -i ข้าพเจ้า/ฉัน/เรา
ต -t ลิงค์ -t สรรพนาม -t วิเสสนสรรพนาม -i นั้น
เอต -t ลิงค์ -t สรรพนาม -t วิเสสนสรรพนาม -i นั่น
อิม -t ลิงค์ -t สรรพนาม -t วิเสสนสรรพนาม -i นี้
อมุ -t ลิงค์ -t สรรพนาม -t วิเสสนสรรพนาม -i โน้น
ย -t ลิงค์ -t สรรพนาม -t วิเสสนสรรพนาม -i ใด
อญฺญ -t ลิงค์ -t สรรพนาม -t วิเสสนสรรพนาม -i อื่น
อญฺญตร -t ลิงค์ -t สรรพนาม -t วิเสสนสรรพนาม -i คนใดคนหนึ่ง
อญฺญตม -t ลิงค์ -t สรรพนาม -t วิเสสนสรรพนาม -i คนใดคนหนึ่ง
ปร -t ลิงค์ -t สรรพนาม -t วิเสสนสรรพนาม -i อื่น
อปร -t ลิงค์ -t สรรพนาม -t วิเสสนสรรพนาม -i อื่นอีก
กตร -t ลิงค์ -t สรรพนาม -t วิเสสนสรรพนาม -i คนไหน/อันไหน
กตม -t ลิงค์ -t สรรพนาม -t วิเสสนสรรพนาม -i คนไหน/อันไหน
เอก -t ลิงค์ -t สรรพนาม -t วิเสสนสรรพนาม -i คนหนึ่ง/พวกหนึ่ง
เอกจฺจ -t ลิงค์ -t สรรพนาม -t วิเสสนสรรพนาม -i บางคน/บางพวก
สพฺพ -t ลิงค์ -t สรรพนาม -t วิเสสนสรรพนาม -i ทั้งปวง
กิํ -t ลิงค์ -t สรรพนาม -t วิเสสนสรรพนาม -i ใคร/อะไร
`
  .trim()
  .split("\n")
  .map((str) => {
    let [token, ...args] = str.split(/\s+/);
    const res = new PaliToken(token)
    while (args.length >= 2) {
      const cmd = args.shift();
      // prettier-ignore
           if (cmd == "-g") res.gender = args.shift() as any;
      else if (cmd == "-t") res.tags.push(args.shift());
      else if (cmd == "-i") res.info.push(args.shift());
      else throw new Error(`unhandle args of word ${token}: ${args}`);
    }
    return res
  });

