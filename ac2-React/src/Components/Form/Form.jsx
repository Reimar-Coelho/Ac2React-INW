function Form () {
    return (
        <form id="contactForm">
            <h1 id="nome2">Contato</h1>
            <div>
                <label>Nome:</label>
                <input type="text" placeholder="Escreva seu nome" name="name"/>
            </div>
            <div>
                <label>Email:</label>
                <input type="email" placeholder="Escreva seu email" name="email"/>
            </div>
            <div>
                <label>Mensagem:</label>
                <textarea placeholder="Escreva sua mensagem" name="message"></textarea>
            </div>
            <button type="submit">Enviar</button>
        </form>
    )
}
export default Form