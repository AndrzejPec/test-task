import './Form.scss';

export const Form = () => {
    return (
        <form class="form">
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Password" />
            <button type="submit">Submit</button>
        </form>
    )
}