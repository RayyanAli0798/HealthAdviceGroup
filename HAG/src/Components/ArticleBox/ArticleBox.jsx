import "./ArticleBox.css"

export default function ArticleBox({ name, description, Symptons, Treatments, Link }) {

    return (
        <>

            <div className="HealthAdviceBox">
                <h2 className="HealthAdviceBoxTitle"> {name} </h2>
                <h3> What Is it?</h3>
                <p> {description}</p>
                <h3> What are symptons? </h3>
                {Symptons.map((sympton, item) => (
                    <ul key={item}> <li> {sympton} </li></ul>
                ))}
                <h3> What are The treatments</h3>
                {Treatments.map((treatment, item) => (
                    <ul key={item}> <li> {treatment} </li></ul>
                ))}
                <a href={Link}> Read more </a>
            </div>

        </>
    )
}