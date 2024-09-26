
const Category = ({category}) => {
    const {logo, category_name, availability} = category;
    return (
        <div className="bg-[#f9f8ff] p-7 rounded-2xl">
            <img src={logo} alt="" />
            <h3 className="text-2xl font-semibold py-3">{category_name}</h3>
            <p>{availability}</p>
        </div>
    );
};

export default Category;