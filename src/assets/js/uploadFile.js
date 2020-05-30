import $ from "jquery";

function UploadFileChunk(Chunk, FileName, event) {

    var FD = new FormData();
    FD.append('file', Chunk, FileName);



    return new Promise(function (resolve, reject) {
        var data = JSON.parse(localStorage.getItem('currentUser'));
        $.ajax({
            type: "POST",
            url: 'http://104.211.214.19:8081/api/Organisation/12/UploadedFileId/115/FileUpload',
            contentType: false,
            processData: false,
            data: FD,
            headers: { "Authorization": "bearer " + data.access_token },
            success: function (response) {
                resolve('success');
            },
            error: function (jqXHR, exception) {
                var msg = '';
                if (jqXHR.status === 0) {
                    msg = 'Not connect.\n Verify Network.';
                } else if (jqXHR.status == 404) {
                    msg = 'Requested page not found. [404]';
                } else if (jqXHR.status == 500) {
                    msg = 'Internal Server Error [500].';
                } else if (exception === 'parsererror') {
                    msg = 'Requested JSON parse failed.';
                } else if (exception === 'timeout') {
                    msg = 'Time out error.';
                } else if (exception === 'abort') {
                    msg = 'Ajax request aborted.';
                } else {
                    msg = 'Uncaught Error.\n' + jqXHR.responseText;
                }
                console.log(msg);
                reject('failure');
            }
        });
    });
}



function UploadFile(TargetFile, event) {
    // create array to store the buffer chunks
    var FileChunk = [];
    var chunk = '';
    // the file object itself that we will work with
    var file = TargetFile;
    // set up other initial vars
    var MaxFileSizeMB = 40;
    var BufferChunkSize = MaxFileSizeMB * (1024 * 1024);
    var FileStreamPos = 0;
    // set the initial chunk length
    var EndPos = BufferChunkSize;
    var Size = file.size;
    // add to the FileChunk array until we get to the end of the file

    while (FileStreamPos < Size) {
        // "slice" the file from the starting position/offset, to  the required length
        FileChunk.push(file.slice(FileStreamPos, EndPos));
        FileStreamPos = EndPos; // jump by the amount read
        EndPos = FileStreamPos + BufferChunkSize; // set next chunk length
    }

    // get total number of "files" we will be sending

    var TotalParts = FileChunk.length;
    alert("TotalParts : " + TotalParts);
    var PartCount = 0;
    // loop through, pulling the first item from the array each time and sending it
    console.log(chunk);
    while (chunk = FileChunk.shift()) {
        PartCount++;
        // alert("PartCount : " + PartCount);
        // file name convention
        var FilePartName = file.name + ".part_" + PartCount + "." + TotalParts;
        // send the file
        UploadFileChunk(chunk, FilePartName, event).catch((value) => {

            console.log('Failed', value);
        });;

    }

}


const _uploadFileChunk = UploadFileChunk;
export { _uploadFileChunk as UploadFileChunk };

const _uploadFile = UploadFile;
export { _uploadFile as UploadFile };
