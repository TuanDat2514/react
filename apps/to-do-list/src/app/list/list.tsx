import './list.scss';
import {useEffect, useId, useState} from "react";

/* eslint-disable-next-line */
export interface ListProps {
}

export interface Item {
  id: number;
  todo: string;
  isEdit: boolean;
  status:boolean
}

export const ListItem: Item[] = [
  {
    id: 1,
    todo: "Ăn sáng",
    isEdit: false,
    status:true
  },
  {
    id: 2,
    todo: "Làm việc",
    isEdit: false,
    status:false
  },
  {
    id: 3,
    todo: "Ăn trưa",
    isEdit: false,
    status:false
  },
]

export function List(props: ListProps) {
  const [list, setItem] = useState(ListItem);
  const [input, setValue] = useState("");
  const [id, setId] = useState(ListItem[ListItem.length - 1].id + 1);
  const addItem = () => {
    setId(id + 1);
    list.push({id, todo: input, isEdit: false, status:false});
    setItem([...list]);
  };
  const change = (event: any) => {
    setValue(event.target.value);
  }
  const deleteItem = (item: any) => {
    list.forEach((i, index) => {
      if (i.id === item.id) {
        list.splice(index, 1);
        setItem([...list]);
      }
    })
  }
  const edit = (index: any) => {
    list[index].isEdit = !list[index].isEdit;
    setItem([...list]);
  }
  const updateItem = (newItem:any,index:any) => {
    list[index].todo = input;
    list[index].isEdit = !list[index].isEdit;
    setItem([...list]);
  }
  useEffect(()  => {
    console.log("abcdasd");
  })
  return (
    <div className={'container'}>
      <h1 className={'title'}>To Do List!</h1>
      <div className="input-add">
        <input placeholder="Add your new todo" onChange={change}/>
        <button onClick={addItem}>
          &#43;
        </button>
      </div>
      {
        list.map((item, index) =>

          <div className="item" key={item.id}>

            {item.isEdit
              ?
              <div className="info">
                <input defaultValue={item?.todo} onChange={change}/>
                <div className="btn">
                  <button className="edit" onClick={() => updateItem(item,index)}>
                    &#10004;
                  </button>
                  <button className="delete" onClick={() => {
                    edit(index)
                  }}>
                    &#10005;
                  </button>
                </div>
              </div>
              :
              <div className="info">
                <div className="name">{item.todo}</div>
                <div className="btn">
                  <button className="edit" onClick={() => edit(index)}>
                    <img className="img" src="https://www.svgrepo.com/show/36160/edit-button.svg"/>
                  </button>
                  <button className="delete" onClick={() => {
                    deleteItem(item)
                  }}>
                    <img className="img" src="   https://cdn-icons-png.flaticon.com/512/1214/1214428.png "/>
                  </button>
                </div>
              </div>
            }
          </div>
        )
      }
      {list.length}
    </div>
  );
}

export default List;
