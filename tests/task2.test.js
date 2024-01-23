const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch({ headless: "new" });

    const page = await browser.newPage();

    await page.goto('http://127.0.0.1:5500/index.html'); 
    await page.waitForTimeout(1000);
    const linkAttribute = await page.evaluate(() => {
        const link = document.querySelector('a'); 
        return link.getAttribute("target"); 
      });

    if(linkAttribute === "_blank") {
        console.log("The atribute target=_blank is sucessfully applied");
        fs.writeFileSync('tests/task2.result.txt', "Passed");
    }else{
        console.log("Atribute not applied");
    }
    
    
    await browser.close();
})();