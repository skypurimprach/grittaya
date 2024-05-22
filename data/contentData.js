// contentData.js

const contentArray = [
    { 
      title: 'แบบที่ 1', 
      content: 'บายศรีแบบที่1', 
      image: 'C:\Users\WINDOWS 11\Desktop\grittaya_project\images\datacontent1.jpg' 
    },
    {
      title: 'บายศรีปากชาม', 
      content: 'บายศรีที่ทำจากใบตองแล้วจัดวางลงบนชามหรือถ้วย จึงถูกเรียกว่า "บายศรีปากชาม"  ใช้ในพิธีบูชาฤกษ์ พิธีนพเคราะห์ พิธีบวงสรวง สังเวย ซึ่งบายศรีปากชามส่วนใหญ่มักใช้เป็นเครื่องตั้งประธานในหมู่เครื่องสังเวย ', 
      image: 'C:\Users\WINDOWS 11\Desktop\grittaya_project\images\datacontent2.jpg' 
    },
    { 
      title: 'แบบที่ 3', 
      content: 'บายศรีแบบที่3', 
      image: 'C:\Users\WINDOWS 11\Desktop\grittaya_project\images\datacontent3.jpg' 
    },
  ];
  
  export const getContentData = () => {
    return {
      contentArray: contentArray
    };
  };
  