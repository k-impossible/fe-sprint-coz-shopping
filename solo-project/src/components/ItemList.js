import Item from "./Item";
import {Row} from '../GlobalStyle';

export default function ItemList({list = []}){
    if(list.length === 0){
        return (<div>리스트가 없습니다.</div>)
    }

    return (
        <Row>
        {list.map((el)=>(
          <Item key={el.id} itemProps={el}/>
        )
        )}
      </Row>
    )
}