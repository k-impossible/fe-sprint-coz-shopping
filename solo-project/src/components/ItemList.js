import Item from "./Item";
import {Row} from '../GlobalStyle';

export default function ItemList({renderList = [],toggleBookMark}){
    if(renderList.length === 0){
        return (<div style={{textAlign:"center", margin:"30px 0px"}}>리스트가 비어있습니다.</div>)
    }

    return (
        <Row>
        {renderList.map((el)=>{
          return <Item key={el.id} itemProp={el} toggleBookMark={toggleBookMark}/>
        }
        )}
      </Row>
    )
}