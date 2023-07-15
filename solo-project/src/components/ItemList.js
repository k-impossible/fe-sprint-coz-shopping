import Item from "./Item";
import {Row} from '../GlobalStyle';

export default function ItemList({renderList = [],setDataList,setBookmarkAndStorage}){
    if(renderList.length === 0){
        return (<div style={{textAlign:"center", margin:"30px 0px"}}>리스트가 비어있습니다.</div>)
    }

    function toggleBookMark(id,value){
      const changeList = renderList.map((el)=>{
        if(el.id === id){
          return {...el, bookmark: !value}
        }
        return el
      })

      setDataList(changeList);
      setBookmarkAndStorage(changeList);

      // console.log(id);
      // console.log(value);
    }

    return (
        <Row>
        {renderList.map((el)=>(
          <Item key={el.id} itemProps={el} toggleBookMark={toggleBookMark}/>
        )
        )}
      </Row>
    )
}