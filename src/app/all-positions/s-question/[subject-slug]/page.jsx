import HeaderArea from "@/app/_components/s-qustions/HeaderArea";

export default async function Page ({ params }) {
    

    const {"subject-slug" : subjectSlugs}  = await params; 

    const formattedTitle = subjectSlugs.replace(/-/g, " ");

    return (
        <>
            <HeaderArea title={formattedTitle} />
        </>
    );
};;
