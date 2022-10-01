function search(){
    query = document.getElementById("searchbar").value;
    url = "https://drive.google.com/drive/u/0/search?q=" + query;
    window.open(url);
}