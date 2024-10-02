apikey = "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"

import os

from groq import Groq

client = Groq(
    api_key=apikey,
)

question = '96. When Arthur travels out of the country, he picks up some souvenirs. When he tries to bring them back home with him, he discovers that he has to pay a tax on them. Arthur must pay the:\nA. souvenir tax.\nB. travel tax.\nC. travel duty.\nD. customs duty.'
stuff = 'Answer this question: '+question+'\nProvide an in-depth explanation of your answer.'

chat_completion = client.chat.completions.create(
    messages=[
        {
            "role": "user",
            "content": stuff,
        }
    ],
    model="llama3-8b-8192",
)

print(chat_completion.choices[0].message.content)