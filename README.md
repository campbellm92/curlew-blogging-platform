## Curlew blogging platform

Questo è una piattaforma di blogging realizzata con Express e Marked (una libreria JavaScript per convertire Markdown in HTML).

La piattaforma è soprattutto per developer con conoscenza di Express. È libera di essere riprodotta e modificata.

# Guida utente

Questa guida presuppone che tu usi VS Code.

1. Naviga nella directory in cui vuoi salvare il codice.
2. Fai click su "Codice" sopra, poi SSH. Copia il codice.
3. Apri un nuovo terminale su VS Code e scrivi (senza virgolette) "git clone" seguito dal codice che hai copiato. Esegui il comando.
4. Rinomina il progetto con un nome che si adatta al tuo progetto.
5. Scrivi "rm -rf .git" nel terminale per rimuovere la cronologia Git.
6. Poi scrivi "npm install" nel terminale per installare le dipendenze.
7. Apri il package.json e modificalo per adattarlo al tuo progetto.
8. Sei prontə per iniziare il tuo blog!

Per creare nuovi post:

1. Apri la directory "posts".
2. Crea un file con il nome del nuovo post e .md come nei esempi.
3. Leggi test.md se non sai come scrivere markdown.
4. Non dimenticare di cancellare i due file "test" e di cambiare le informazioni in index.html.

Per raggiungere le pagine, crea nuovi file HTML e configura app.js.

Una guida su come ho creato questo blog e su come distribuire il tuo blog è in arrivo.
