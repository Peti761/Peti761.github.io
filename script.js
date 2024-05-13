function result() {
    if (!$("#kereses").val()) { // megnézem, hogy a kereses ID-jű input üres-e
        $("#result").html(""); // ha üres akkor nem írok ki semmit
    } else {
        $("#result").html("Nincs találat.");  // ha nem üres akkor kiírom, hogy nincs találtat.
    }
}

function popup() {
    alert('Üdvözöllek az oldalamon!!:D\n\nEz az oldal arra szolgál hogy zenéket találj és fedezz fel! pár elrejtett dologal megspékelve.');
} // kiírok egy feugró ablakba egy üzenetet.