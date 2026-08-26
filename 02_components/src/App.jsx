import "./App.css";
import AuthorBiography from "./components/AuthorBiography";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
const url1 = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Michael_Lewis_2009.jpg/250px-Michael_Lewis_2009.jpg";
const url2 = "https://knigogo.top/wp-content/uploads/2018/08/Pola-Goukinz.png";
const url3 = "https://static.independent.co.uk/2025/03/17/14/slack-imgs-copy.jpg?quality=75&width=1368&crop=3%3A2%2Csmart&auto=webp";

const authors = [
    {
        name: "Майкл Льюїс",
        image: url1,
        biography: `Майкл Льюїс народився у Новому Орлеані у родині корпоративного
                юрист Д. Томаса Льюїса (англ. J. Thomas Lewis) та громадської
                активістки Діани Монро Льюїс (англ. Diana Monroe Lewis).`,
    },
    {
        name: "Пола Гоукінз",
        image: url2,
        biography:
            "британська письменниця, яка здобула широку популярність після публікації роману «Дівчина у потягу» (2015).",
    },
    {
        name: "Емма Доног'ю",
        image: url3,
        biography:
            "ірландсько-канадська письменниця, драматургиня, літературознавиця та сценаристка.",
    },
];

function App() {
    return (
        <>
            <Navbar />
            <div className="app-container">
                <AuthorBiography author={authors[0]} />
                <AuthorBiography author={authors[1]} />
                <AuthorBiography author={authors[2]} />
            </div>
            <Footer />
        </>
    );
}

export default App;