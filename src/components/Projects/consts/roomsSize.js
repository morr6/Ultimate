export const RoomsSize = [
  {name: 'leftParter',whole:'64.32',salon:'25.50',bathroom:'6.33',room1: '12.05',room2:'9.53',wardrobe:'1.62',lobby:'5.50',hall:'3.79'},
  {name: 'leftFloor',whole:'66.57',salon:'26.40',bathroom:'7.15',room1: '11.50',room2:'7.40',wardrobe:'2.20',lobby:'5.60',hall:'5.32'},
  {name: 'rightParter',whole:'65.60',salon:'25,40',bathroom:'6.80',room1: '10.10',room2:'10.40',wardrobe:'2.50',lobby:'5.20',hall:'5.35'},
  {name: 'rightFloor',whole:'64.90',salon:'24.60',bathroom:'8.40',room1: '10.70',room2:'8.40',wardrobe:'3.15',lobby:'4.50',hall:'5.15'}
];


const filter = (items, filters) => {
    return items.filter(item => (
      Object.keys(filters).reduce((acc, currentFilterKey) => 
        item[currentFilterKey].indexOf(filters[currentFilterKey]) !== -1, false)
    ))
  }
  
  const items = [ { a: 'aab' , b: 'aaa', c: 'bbc' }, { a: 'bbb' , b: 'bba', c: 'ccc' }, { a: 'aaa' , b: 'ddd', c: 'bss' }, { a: 'ccc' , b: 'ddd', c: 'ccc' } ]
  
  const filters = { a: 'aa' , c: 'b' }
  