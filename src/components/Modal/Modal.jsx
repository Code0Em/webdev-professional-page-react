//=============
//  Functions
//=============
// Creates modal, receiving props (data) from parent component (Form).
const Modal = ({ title, text }) => {
    return (
        <section className="modal fade"
            id="modal"
            tabIndex="-1"
            aria-labelledby="modalLabel"
            aria-hidden="true">
            <article className="modal-dialog">
                <article className="modal-content">
                    <article className="modal-header">
                        <h1 className="modal-title fs-5">{title}</h1>
                    </article>
                    <article className="modal-body text-start">{text}</article>
                    <article className="modal-footer">
                        <button type="button"
                            className="btn"
                            data-bs-dismiss="modal">Close</button>
                    </article>
                </article>
            </article>
        </section>
    )
};

//===========
//  Exports
//===========
// Exports component.
export default Modal;