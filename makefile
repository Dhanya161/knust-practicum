all: jsonserver-1 jsonserver-2

jsonserver-1:
	json-server ./api/info.json --port 5000

jsonserver-2:
	json-server ./api/letterData.json --port 4000