const content = [
    {
        id:'1',
        date: '30 เม.ย 2567',
        title: 'พิธีไหว้ดาวพฤหัสย้ายราศี',
        content:
            'เพื่อความเป็นสิริมงคล และขอพรจากพระพฤหัสบดี ให้กลับร้ายกลายเป็นดี แม้นดีอยู่แล้วก็ให้ดียิ่งขึ้น สมปราถนาทุกประการ ซึ่งดาวพฤหัสบดี...',
        detail:
            'พิธีไหว้ดาวพฤหัสย้ายราศี วันที่ 30 เมษายน 2567 เพื่อความเป็นสิริมงคล และขอพรจากพระพฤหัสบดี ให้กลับร้ายกลายเป็นดี แม้นดีอยู่แล้วก็ให้ดียิ่งขึ้น สมปราถนาทุกประการ ซึ่งดาวพฤหัสบดี จะย้ายจากราศีเมษเข้าสู่ราศีพฤษภ จนถึงวันที่ 13 พฤษภาคม 2568 ส่งผลให้แต่ละราศีมีการเปลี่ยนแปลงในเรื่องที่แตกต่างกันไป ดาวพฤหัสบดี ถือเป็นดาวศุภเคราะห์ในทางโหราศาสตร์ และเป็นดาวใหญ่ที่มีความสำคัญไม่แพ้ดาวราหูและดาวเสาร์ หากเป็นดาวที่ให้คุณในชะตาใด จะส่งเสริมให้ชะตานั้นเกิดความราบรื่นมีโชคใหญ่ในชะตา แม้นย้ายเข้าตำแหน่งทุศนะภพ (ตำแหน่งร้าย) ก็จะช่วยบรรเทาโทษภัยต่างๆที่จะเกิดขึ้น เป็นดาวที่นักโหราศาสตร์ให้ความสำคัญ เพราะดาวพฤหัสบดี สามารถช่วยคลายเคราะห์ในชะตาใดๆที่มีปัญหา รวมถึงให้โชคใหญ่ได้',
        image: '/images/contents/content1.png',
        image_detail: '/images/contents/content_detail1.jpg',
        active: true
    },
    {
        id:'2',
        date: '20 พ.ค. 2567',
        title: 'เอาบุญมาฝาก',
        content:'คุณเกรส ชิดชลธาร เจ้าของกฤตธยา และ อาจารย์หนุ่ม อัญญาน้อย ไทเลย ผู้ร่วมก่อตั้ง เป็นประธานร่วมในพิธีบรรจุพระบรมสารีริกธาตุในองค์พระประธานอุโบสถ์...',
        detail:
            'คุณเกรส ชิดชลธาร เจ้าของกฤตธยา และ อาจารย์หนุ่ม อัญญาน้อย ไทเลย ผู้ร่วมก่อตั้ง เป็นประธานร่วมในพิธีบรรจุพระบรมสารีริกธาตุในองค์พระประธานอุโบสถ วัดป่ากิตติญาณ์ อ.ภูเวียง จ.ขอนแก่น และในโอกาสนี้ กฤตธยาได้เจ้าภาพถวายเครื่องสังฆทานจำนวน 60 ชุด และมาลัยถวายองค์พระประธาน อนุโมทนาบุญด้วยกันนะคะ สาธุ 🙏🏻',
        image: '/images/contents/content2.png',
        image_detail: '/images/contents/content_detail2.jpg',
        active: true
    },
    {
        id:'3',
        date: '09 ก.พ. 2567',
        title: '“พิธีหุงสีผึ้งเมตตามหานิยม” ตามแบบโบราณ ',
        content:'เพื่อประโยชน์ในการอนุเคราะห์ผู้ที่มีจิตศรัทธาต่อศาสนาและคุณพ่อแม่คุณครูบาอาจารย์ผู้ประสิทธิ์ประสาทวิชา...',
        detail:
            'พิธีปัดชง ไหว้ขอพรไท้ส่วย ประจำนักกษัตรปีมะโรง และไหว้ เทพเจ้าไฉ่ซิงเอี๊ย เทพเจ้าแห่งโชคลาภ เพื่อเสริมมงคลให้ประสบความสำเร็จเจริญรุ่งเรือง ร่มเย็นเป็นสุข และอุดมสมบูรณ์ด้วยโชคลาภ คิดทำการสิ่งใดให้ร่ำรวย ประกอบการงานการค้าใดขอให้ก้าวหน้า สมปรารถนาในสิ่งที่หวังไว้ทุกประการ และขอให้พรนี้ประสบกับลูกค้า, ลูกเพจ ของกฤตธยา และทุกท่านที่เห็นโพสนี้ด้วยด้วยเทอญ #ตรุษจีน2567',
        image: '/images/contents/content3.png',
        image_detail: '/images/contents/content_detail3.jpg',
        active: false
    },
]
export const getDataContent = () => {
    return {
        content: content
    };
  };