var record = 

{
    123:{
        "name": "Souharda",
        "type": "Romantic",
        "artist" :"Arijit Singh",
        "tracks":
        [
            "Tum Ho To",
            "Tum Hi Ho",
            "Dil Ibadat", 
            "Vaaste",
            "Love me like you do"
        ]
    },

        418:{
        "name": "Amita",
        "type": "rap",
        "artist" :"Ariana Grande",
        "tracks":
        [
            "Thank u_next",
            "break up with your girlfriend",
            "Into you", 
            "Breathin"
            
        ]
    }
};

//Keeping the copy of the object
var objCopy = JSON.parse(JSON.stringify(record));

//Updating collection

function updateRecord(id,property,value)
{
    //1.Check whether value is empty we delete the property
    if (value===0)
    {
        delete record[id][property];

    }
   //2.Check if the value is of tracks if it is then just add it ie push at the end of the array 
    else if(property=="tracks")
    {
        //To check whether the property of tracks has value or shall create empty array
        record[id][property] = record[id][property] || [];
        record[id][property].push(value);
    }
    else 
    {
        record[id][property]=value;
    }
    return record;
}

console.log(updateRecord(418,"tracks","Titanic"));
//console.log(updateRecord());