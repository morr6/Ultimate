export 


const filter = (items, filters) => {
    return items.filter(item => (
      Object.keys(filters).reduce((acc, currentFilterKey) => 
        item[currentFilterKey].indexOf(filters[currentFilterKey]) !== -1, false)
    ))
  }
  
  const items = [ { a: 'aab' , b: 'aaa', c: 'bbc' }, { a: 'bbb' , b: 'bba', c: 'ccc' }, { a: 'aaa' , b: 'ddd', c: 'bss' }, { a: 'ccc' , b: 'ddd', c: 'ccc' } ]
  
  const filters = { a: 'aa' , c: 'b' }
  