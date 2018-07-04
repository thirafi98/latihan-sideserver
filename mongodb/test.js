db = connect('127.0.0.1:27017/mdb');

function insertData(myObject){
	db.names.insert(myObject);
}

function getDataBack(){
	var cursor = db.names.find();
	while(cursor.hasNext()){
		printjson(cursor.next());
	}
}