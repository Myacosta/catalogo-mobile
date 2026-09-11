import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const trad: any = {
  "Blue & Black Check Shirt": {
    nome: "Camisa Xadrez Azul e Preta",
    desc: "Camisa masculina xadrez azul e preta, 100% algodão, estilosa e confortável para o dia a dia.",
  },
  "Gigabyte Aorus Men Tshirt": {
    nome: "Camiseta Gamer Preta",
    desc: "Camiseta gamer preta com estampa Aorus, algodão macio e respirável.",
  },
  "Man Plaid Shirt": {
    nome: "Camisa Xadrez Vermelha e Preta",
    desc: "Camisa xadrez vermelha e preta, perfeita para o inverno, quente e estilosa.",
  },
  "Man Short Sleeve Shirt": {
    nome: "Camisa Floral Azul",
    desc: "Camisa manga curta floral azul, leve e fresca para o verão.",
  },
  "Men Check Shirt": {
    nome: "Camisa Xadrez Verde",
    desc: "Camisa xadrez verde, casual e elegante.",
  },
  "Nike Air Jordan 1 Red And Black": {
    nome: "Tênis Nike Air Jordan",
    desc: "Tênis Nike Air Jordan vermelho e preto, ícone do basquete, confortável e estiloso.",
  },
  "Nike Baseball Cleats": {
    nome: "Chuteira Nike",
    desc: "Chuteira Nike para beisebol, alta performance e aderência.",
  },
  "Puma Future Rider Trainers": {
    nome: "Tênis Puma Colorido",
    desc: "Tênis Puma Future Rider colorido, estilo retrô e conforto para o dia a dia.",
  },
  "Sports Sneakers Off White & Red": {
    nome: "Tênis Branco e Vermelho",
    desc: "Tênis esportivo branco com detalhe vermelho, estiloso e confortável.",
  },
  "Sports Sneakers Off White Red": {
    nome: "Tênis Branco e Vermelho",
    desc: "Tênis esportivo branco com vermelho, perfeito para esportes.",
  },
  "Brown Leather Belt Watch": {
    nome: "Relógio Couro Marrom",
    desc: "Relógio masculino com pulseira de couro marrom, elegante e clássico.",
  },
  "Longines Master Collection": {
    nome: "Relógio Longines Prata",
    desc: "Relógio Longines prata, luxuoso e sofisticado.",
  },
  "Rolex Cellini Date Black Dial": {
    nome: "Relógio Rolex Preto",
    desc: "Relógio Rolex Cellini com mostrador preto, luxo e prestígio.",
  },
  "Rolex Cellini Moonphase": {
    nome: "Relógio Rolex Dourado",
    desc: "Relógio Rolex dourado com fase da lua, elegante.",
  },
  "Rolex Datejust": {
    nome: "Relógio Rolex Datejust",
    desc: "Relógio Rolex Datejust prateado, clássico atemporal.",
  },
  "Rolex Submariner Watch": {
    nome: "Relógio Rolex Submariner",
    desc: "Relógio Rolex Submariner preto, esportivo e resistente à água.",
  },
  "IWC Ingenieur Automatic Steel": {
    nome: "Relógio IWC Prata",
    desc: "Relógio IWC automático em aço, engenharia suíça.",
  },
  "Blue Women's Handbag": {
    nome: "Bolsa Azul Feminina",
    desc: "Bolsa azul elegante, espaçosa e perfeita para o dia a dia.",
  },
  "Heshe Women's Leather Bag": {
    nome: "Bolsa de Couro Marrom",
    desc: "Bolsa de couro marrom grande, espaçosa e durável.",
  },
  "Prada Women Bag": {
    nome: "Bolsa Prada Azul",
    desc: "Bolsa Prada azul, luxuosa e elegante.",
  },
  "White Faux Leather Backpack": {
    nome: "Mochila Branca",
    desc: "Mochila branca de couro sintético, moderna e prática.",
  },
  "Women Handbag Black": {
    nome: "Bolsa Preta",
    desc: "Bolsa preta clássica, combina com tudo.",
  },
  "Black Women's Gown": {
    nome: "Vestido Longo Preto",
    desc: "Vestido longo preto elegante para festas e eventos especiais.",
  },
  "Corset Leather With Skirt": {
    nome: "Vestido com Saia",
    desc: "Conjunto feminino corset de couro com saia, estiloso e moderno.",
  },
  "Corset With Black Skirt": {
    nome: "Vestido Preto Longo",
    desc: "Vestido preto longo com corset, elegante para festas.",
  },
  "Dress Pea": {
    nome: "Vestido Poá Branco",
    desc: "Vestido branco de poá com laço, fofo e romântico.",
  },
  "Marni Red & Black Suit": {
    nome: "Vestido Longo Vinho",
    desc: "Vestido longo vinho com manga rosa, chique e confortável.",
  },
  "Green Crystal Earring": {
    nome: "Brinco Cristal Verde",
    desc: "Brinco de cristal verde, elegante e brilhante.",
  },
  "Tropical Earring": {
    nome: "Brinco Tropical",
    desc: "Brinco tropical colorido, alegre e estiloso.",
  },
  "Women's Stiletto Heel": {
    nome: "Salto Alto Preto",
    desc: "Salto alto preto fino, elegante para festas.",
  },
};

export default function Detalhe() {
  const { id } = useLocalSearchParams();
  const [p, setP] = useState<any>(null);
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((r) => r.json())
      .then(setP);
  }, [id]);
  if (!p)
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator />
        <Text>Carregando...</Text>
      </View>
    );

  const t = trad[p.title] || {
    nome: p.title.replace("Women", "Feminino").replace("Men", "Masculino"),
    desc: "Produto de alta qualidade, confortável e estiloso. Perfeito para o dia a dia.",
  };
  const por = p.price;
  const off = p.discountPercentage;
  const de = por / (1 - off / 100);
  const econ = de - por;

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff", padding: 16 }}>
      <TouchableOpacity onPress={() => router.back()}>
        <Text
          style={{
            color: "#007AFF",
            marginTop: 20,
            marginBottom: 10,
            fontSize: 16,
          }}
        >
          ← Voltar
        </Text>
      </TouchableOpacity>
      <Image
        source={{ uri: p.thumbnail }}
        style={{ width: "100%", height: 320, borderRadius: 12 }}
        resizeMode="contain"
      />
      <Text style={{ fontSize: 22, fontWeight: "bold", marginTop: 16 }}>
        {t.nome}
      </Text>
      <View
        style={{
          backgroundColor: "#F0F0F0",
          padding: 16,
          borderRadius: 12,
          marginTop: 12,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
          <Text style={{ textDecorationLine: "line-through", color: "#888" }}>
            De: R$ {de.toFixed(2)}
          </Text>
          <View
            style={{
              backgroundColor: "#FF3D00",
              paddingHorizontal: 8,
              paddingVertical: 4,
              borderRadius: 6,
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "bold" }}>
              -{off.toFixed(0)}% OFF
            </Text>
          </View>
        </View>
        <Text
          style={{
            fontSize: 28,
            color: "#2E7D32",
            fontWeight: "bold",
            marginTop: 8,
          }}
        >
          Por: R$ {por.toFixed(2)}
        </Text>
        <Text style={{ color: "#2E7D32", marginTop: 4 }}>
          Você economiza R$ {econ.toFixed(2)}!
        </Text>
      </View>
      <Text
        style={{ marginTop: 16, fontSize: 16, lineHeight: 22, color: "#333" }}
      >
        {t.desc}
      </Text>
    </ScrollView>
  );
}
