function log(event) {
	text.value += event.type + "NMWOCC" + event.target.id;
	text.scrollTop = text.scrollHeight;
}