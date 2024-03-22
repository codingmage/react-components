export default function Modal({id, header, body, footer, onClose}) {
	return (
		<div id={id || "Modal"} className="modal">
			<div className="modal-content">

				<div className="modal-header">
					<span onClick={onClose} className="close-modal-icon">&times;</span>
					<h2>{header ? header : "Header"}</h2>
				</div>

				<div className="modal-body">
					{
						body ? body : <div>Modal body</div>
					}
				</div>

				<footer className="modal-footer">
					{
						footer ? footer : <h3>Modal footer</h3>
					}
				</footer>

			</div>
		</div>
	)
}