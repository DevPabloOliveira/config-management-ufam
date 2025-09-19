import { MyButton } from './styles'

function Button(){
    return (
        <div>
            <MyButton>Clique</MyButton>

            {/* Nova div para login */}
            <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc' }}>
                <h3>Login</h3>
                <input type="text" placeholder="Usuário" style={{ display: 'block', marginBottom: '10px' }} />
                <input type="password" placeholder="Senha" style={{ display: 'block', marginBottom: '10px' }} />
                <MyButton>Entrar</MyButton>
            </div>
        </div>
    )
}

export default Button