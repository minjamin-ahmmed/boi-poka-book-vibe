import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../../Utilities/AddToDb';
import ReadedBooks from '../ReadedBooks/ReadedBooks';

const ListedBooks = () => {

    const [readList, setReadList] = useState([])
    const allBooks = useLoaderData()


useEffect(() => {

    const storedReadList = getStoredReadList();
    const storedReadListInt = storedReadList.map(id => parseInt(id))

    const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId))

    setReadList(readBookList)
    console.log(allBooks, storedReadList, storedReadListInt, readBookList);

    
}, [])

    return (
        <div>
            <h3>Listed Books</h3>

            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel>
                    <h2> Total Mark As Read: {readList.length} </h2>
                    {
                        readList.map(read => <ReadedBooks key={read.bookId} read={read}></ReadedBooks>)
                    }
                </TabPanel>

                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>

                </Tabs>
        </div>
    );
};

export default ListedBooks;