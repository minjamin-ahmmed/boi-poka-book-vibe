// Mark As Read Functionality

const getStoredReadList = () => {

    const storedListStr = localStorage.getItem('read-list')

    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }

    else{
        return []
    }

}



const addStoredReadList = (id) => {

    const storedList = getStoredReadList()

    if(storedList.includes(id)){
        //Already Exists
        alert("This book is already Exist")
    }
    else{
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList)
        localStorage.setItem('read-list', storedListStr)
    }
}


//Wishlist Functionality
const getStoredWishList = () => {

    const storedListStr = localStorage.getItem('wish-list')

    if(storedListStr){
        const storedList = JSON.parse(storedListStr)
        return storedList
    }

    else{
        return []
    }
}

const addStoredWishList = (id) => {

    const storedList = getStoredWishList()

    if(storedList.includes(id)){
        alert("This book is Already Exist")
    }
    else{
        storedList.push(id)
        const storedListStr = JSON.stringify(storedList)
        localStorage.setItem('wish-list', storedListStr)
    }
}


export {addStoredReadList, addStoredWishList, getStoredReadList}
