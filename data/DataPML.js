const pml = [
    { 
      id: '1',
      title: 'พวงมาลัยแบบที่ 1', 
      content: 'แบบที่1',
      detail:'รายละเอียด',
      howto: 'วิธีใช้ : ',
      warning: 'คำเตือน : ห้ามรับประทาน',
      image: '/images/products/pml1.png',
      image_detail:'/images/products/pml/big_pml1.png'
    },
    {
      id: '2',
      title: 'พวงมาลัยแบบที่ 2', 
      content: 'แบบที่ 2', 
      detail:'รายละเอียด',
      howto: 'วิธีใช้ : ',
      warning: 'คำเตือน : ห้ามรับประทาน',
      image: '/images/products/pml2.png',
      image_detail:'/images/products/pml/big_pml2.png'
    },
    {
      id: '3',
      title: 'พวงมาลัยแบบที่ 3', 
      content: 'แบบที่3',
      detail:'รายละเอียด',
      howto: 'วิธีใช้ : ',
      warning: 'คำเตือน : ห้ามรับประทาน',
      image: '/images/products/pml3.png',
      image_detail:'/images/products/pml/big_pml3.png'
    },
  ];
  
  export const getDataPML = () => {
    return {
        pml: pml
    };
  };
  