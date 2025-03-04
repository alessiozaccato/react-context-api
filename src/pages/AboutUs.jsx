const AboutUs = () => {
    return (
        <div className="container mt-3">
            <h2>Contatta il Servizio Clienti</h2>
            <ul className="list-group">
                <li className="list-group-item">
                    <strong>Telefono:</strong> <a className="btn btn-danger" href="#">1-800-123-4567</a>
                </li>
                <li className="list-group-item">
                    <strong>Email:</strong> <a className="btn btn-danger" href="#">assistenza@esempio.com</a>
                </li>
                <li className="list-group-item">
                    <strong>Chat online:</strong> <a className="btn btn-danger" href="#">Avvia chat</a>
                </li>
                <li className="list-group-item">
                    <strong>Modulo di contatto:</strong> <a className="btn btn-danger" href="#">Compila il modulo</a>
                </li>
                <li className="list-group-item">
                    <strong>Social media:</strong>
                    <ul className="list-inline">
                        <li className="list-inline-item">
                            <a className="btn btn-danger" href="#" target="_blank" >Facebook</a>
                        </li>
                        <li className="list-inline-item">
                            <a className="btn btn-danger" href="#" target="_blank" >Twitter</a>
                        </li>
                        <li className="list-inline-item">
                            <a className="btn btn-danger" href="#" target="_blank" >Instagram</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>

    )
}

export default AboutUs