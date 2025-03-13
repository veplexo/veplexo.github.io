# Abre o arquivo original para leitura e cria um novo para escrita
with open('palavras.txt', 'r', encoding='utf-8') as arquivo_entrada, \
     open('palavras_5_letras.txt', 'w', encoding='utf-8') as arquivo_saida:
    
    # Lê cada linha do arquivo de entrada
    for linha in arquivo_entrada:
        # Remove espaços em branco e quebras de linha
        palavra = linha.strip()
        
        # Verifica se a palavra tem exatamente 5 letras
        if len(palavra) == 5:
            # Escreve a palavra no novo arquivo
            arquivo_saida.write(palavra + '\n')

print("Processamento concluído! As palavras de 5 letras foram salvas em 'palavras_5_letras.txt'")
