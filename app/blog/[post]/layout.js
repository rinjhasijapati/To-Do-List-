const BolgLayout = ({children}) => {
    return children;
}

export default BolgLayout;

export async function generateMetadata({params}) {
    return { 
        title: params.post.split('-').join(" ")
    }
}