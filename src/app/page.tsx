import Head from "next/head";
import { SideBar } from "@/components/page/SideBar";

const HtmlHead = ({}) => {
    return <Head>
        <title>My Memento</title>
        <link rel="icon" href="/buddha-elephant.png" />
        <meta name="description" content="Leverage AI to glean the emotional context and personality of written text using the widely accepted Big 5 Personality Traits from Modern Psychology. Use to illuminate author intent, decode text messages, and compose powerful emails!" />
    </Head>;
}

const HtmlBody = ({ children }) => {
    const mainStyle = `
        fixed
        h-[100vh]
        w-[100vw]
        bg-gray-100
        overflow-scroll
    `;
    
    return <main className={mainStyle}>
        {children}
    </main>
};

const Home = ({}) => {
    return <>
        <HtmlHead />
        <HtmlBody>
            <SideBar />
        </HtmlBody>
    </>
};

export default Home;
