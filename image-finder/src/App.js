import './header.css';
import './content.css';
import './article.css';
import {Field, Form, Formik} from "formik";
import {useState} from "react";
import Logo from "./components/Logo";


const App = () => {
    const [photos, setPhotos] = useState([])
    const open = url => window.open(url)
    console.log(photos)
    return (<div>
        <header>
            <Formik
                initialValues={{search: ''}}
                onSubmit={async values => {
                    const response = await fetch(`https://api.unsplash.com/search/photos?per_page=20&query=${values.search}`,
                        {headers: {'Authorization': 'Client-ID INR-tqlRoXu5Rh42uMSR6-elavoDN78lV47tEr0mjOI'}})
                    const data = await response.json()
                    setPhotos(data.results)
                    console.log(data)
                }}
            >
                <Form>
                    <Logo/>
                    <Field label='Search: ' name='search' placeholder='Search...' />
                </Form>
            </Formik>
        </header>
        <div className='container'>
            <div className='center'>
                {photos.map(photo =>
                    <article key={photo.id} onClick={() => open(photo.links.html)}>
                        <img src={photo.urls.regular} alt={photo.description}/>
                        {/*<p>{[photo.description, photo.alt_description].join(' - ')}</p>*/}
                    </article>)}
            </div>
        </div>
    </div>)
}

export default App;
