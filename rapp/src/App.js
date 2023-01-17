import './App.css';
import CardComponent from "./components/CardComponent";

function App() {
    const appName = 'Todo App';
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const contactDate = day + "-" + "0" + month + "-" + year;
    return (
        <div>
            <h1 className="appName">{appName}</h1>
            <div className="components">
                <CardComponent title="Call Family" desc="This is family mobile number" mobile="01915923397" date={contactDate}/>
                <CardComponent title="Call Mother" desc="This is mother's mobile number" mobile="01815923396" date={contactDate}/>
                <CardComponent title="Call Father" desc="This is father's mobile number" mobile="01715923392" date={contactDate}/>
                <CardComponent title="Call Sister" desc="This is sister's mobile number" mobile="01515923390" date={contactDate}/>
            </div>
        </div>
    );
}

export default App;
