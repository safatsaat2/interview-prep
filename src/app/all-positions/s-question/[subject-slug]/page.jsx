import HeaderArea from "@/app/_components/s-qustions/HeaderArea";

const Page = ({ params }) => {
    const {'subject-slug' : subjectSlug} = params;
    return (
        <div>
            <HeaderArea tilte={subjectSlug} />
        </div>
    );
};

export default Page;
