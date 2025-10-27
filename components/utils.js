import next from "next";

export async function getDataISR(link) {
    const res = await fetch(link, {
        next: { revalidate: 10 }
    });
    return res.json();

}
