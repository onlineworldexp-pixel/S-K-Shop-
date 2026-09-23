function siteSearch() {

    let input = document
        .getElementById("siteSearch")
        .value
        .toLowerCase()
        .trim();

    if (input === "") {
        return;
    }

    let pages = [
        {
            name: "Latest Jobs",
            url: "jobs.html",
            keywords: "job jobs sarkari government vacancy bharti naukri"
        },
        {
            name: "Results",
            url: "results.html",
            keywords: "result results exam result university result marksheet"
        },
        {
            name: "Admit Card",
            url: "admit-card.html",
            keywords: "admit card hall ticket exam"
        },
        {
            name: "University",
            url: "university.html",
            keywords: "university college admission semester exam"
        }
    ];

    let found = false;

    for (let i = 0; i < pages.length; i++) {

        if (
            pages[i].name.toLowerCase().includes(input) ||
            pages[i].keywords.includes(input)
        ) {

            window.location.href = pages[i].url;

            found = true;

            break;
        }
    }

    if (!found) {
        alert("कोई जानकारी नहीं मिली।");
    }

}
