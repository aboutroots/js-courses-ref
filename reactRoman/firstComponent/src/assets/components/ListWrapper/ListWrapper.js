import React from "react";
import ListItem from "./ListItem/ListItem";
import './ListWrapper.css';
import { twitterAccounts } from "../../../data/twitterAccounts";


                                // ListItem to KOMPONENT PRYWATNY, wykorzystywany tylko przez ListWrapper. To do niego podaję propsy (tu item)
const ListWrapper = () => (     // ListWrapper to KOMPONENT PUBLICZNY, mogę go używać wielokrotnie w aplikacji
  <ul className='listWrapper__wrapper'>    
      {twitterAccounts.map(item => 
      (
        <ListItem key={item.name} {...item} />
      ))}
  </ul>
);

export default ListWrapper;