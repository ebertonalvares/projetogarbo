import Hero from "../../components/Hero";
import Details from "../../components/Sobre";
import "./styles.css"
import { FloatButton } from "antd";
import { WhatsAppOutlined } from "@ant-design/icons";

function Home() {
    return (
        <>
            <Hero />
            <Details />

            < FloatButton id="whatsapp-button"
                type="primary"
                style={{width: '60px', height: '60px'}}
                href="https://wa.me/5546999846834"
                target="_blank"
                icon={<WhatsAppOutlined />}
            />
        </>
    )
}

export default Home;