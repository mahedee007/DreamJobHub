

const Section = ({title, subTitle}) => {
    return (
        <div className="text-center mt-14">
            <h1 className="text-5xl font-bold pb-4">{title}</h1>
            <p className="font-medium text-[#757575]">{subTitle}</p>
        </div>
    );
};

export default Section;