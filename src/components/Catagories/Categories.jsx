import  { useEffect, useState } from 'react';
import Category from '../Catagory/Category';

const Categories = () => {
const [categories , setCategories] = useState([]);

useEffect(()=>{
    fetch('categories.json')
    .then(response => response.json())
    .then(data => setCategories(data))
},[])

    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-4 mt-12 justify-center w-4/5 mx-auto gap-7 mb-5'>
            {
                categories.map(category => <Category key={category.id} category={category}></Category>)
            }
        </div>
    );
};

export default Categories;