import { router } from "expo-router";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const pt: any = {
  "Blue & Black Check Shirt": "Camisa Xadrez Azul e Preta",
  "Gigabyte Aorus Men Tshirt": "Camiseta Gamer Preta",
  "Man Plaid Shirt": "Camisa Xadrez Vermelha e Preta",
  "Man Short Sleeve Shirt": "Camisa Floral Azul",
  "Men Check Shirt": "Camisa Xadrez Verde",
  "Nike Air Jordan 1 Red And Black": "Tênis Nike Air Jordan",
  "Blue Women's Handbag": "Bolsa Azul Feminina",
  "Heshe Women's Leather Bag": "Bolsa Couro Marrom",
  "Prada Women Bag": "Bolsa Prada Azul",
  "White Faux Leather Backpack": "Mochila Branca",
  "Women Handbag Black": "Bolsa Preta",
  "Black Women's Gown": "Vestido Longo Preto",
  "Corset Leather With Skirt": "Conjunto Corset com Saia",
  "Corset With Black Skirt": "Corset com Saia Preta",
  "Dress Pea": "Vestido Poá Branco",
  "Marni Red & Black Suit": "Vestido Longo Vinho",
  "IWC Ingenieur Automatic Steel": "Relógio IWC Prata",
  "Longines Master Collection": "Relógio Longines Prata",
  "Rolex Cellini Date Black Dial": "Relógio Rolex Preto",
  "Rolex Cellini Moonphase": "Relógio Rolex Dourado",
  "Brown Leather Belt Watch": "Relógio Couro Marrom",
  "Green Crystal Earring": "Brinco Cristal Verde",
  "Tropical Earring": "Brinco Tropical",
};

export default function Loja() {
  const [all, setAll] = useState<any[]>([]);
  const [lista, setLista] = useState<any[]>([]);
  const [genero, setGenero] = useState("masculino");
  const [tipo, setTipo] = useState("camisas");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=200")
      .then((r) => r.json())
      .then((d) => {
        setAll(
          d.products.filter(
            (p: any) =>
              p.category.startsWith("mens") || p.category.startsWith("womens"),
          ),
        );
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let f = all.filter((p) =>
      p.category.startsWith(genero === "masculino" ? "mens-" : "womens-"),
    );
    if (tipo === "camisas" || tipo === "vestidos")
      f = f.filter(
        (p) =>
          p.category.includes("shirt") ||
          p.category.includes("dress") ||
          p.category.includes("gown") ||
          p.category.includes("top"),
      );
    if (tipo === "sapatos") f = f.filter((p) => p.category.includes("shoes"));
    if (tipo === "relogios") f = f.filter((p) => p.category.includes("watch"));
    if (tipo === "bolsas") f = f.filter((p) => p.category.includes("bag"));
    if (tipo === "joias") f = f.filter((p) => p.category.includes("jewellery"));
    setLista(f);
  }, [all, genero, tipo]);

  useEffect(() => {
    setTipo(genero === "masculino" ? "camisas" : "vestidos");
  }, [genero]);

  if (loading)
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator />
        <Text>Carregando...</Text>
      </View>
    );

  return (
    <View style={{ flex: 1, backgroundColor: "#fff", padding: 12 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 40,
          marginBottom: 12,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
          Olá, Maria - Produtos
        </Text>
        <TouchableOpacity
          onPress={() => router.replace("/")}
          style={{
            backgroundColor: "#E53935",
            paddingHorizontal: 14,
            paddingVertical: 8,
            borderRadius: 8,
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "bold" }}>Sair</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: "row", gap: 8, marginBottom: 12 }}>
        <TouchableOpacity
          onPress={() => setGenero("masculino")}
          style={{
            backgroundColor: genero === "masculino" ? "#000" : "#E0E0E0",
            paddingHorizontal: 22,
            paddingVertical: 12,
            borderRadius: 20,
          }}
        >
          <Text
            style={{
              color: genero === "masculino" ? "#fff" : "#000",
              fontWeight: "bold",
            }}
          >
            Masculino
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setGenero("feminino")}
          style={{
            backgroundColor: genero === "feminino" ? "#000" : "#E0E0E0",
            paddingHorizontal: 22,
            paddingVertical: 12,
            borderRadius: 20,
          }}
        >
          <Text
            style={{
              color: genero === "feminino" ? "#fff" : "#000",
              fontWeight: "bold",
            }}
          >
            Feminino
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: "row",
          gap: 8,
          marginBottom: 12,
          flexWrap: "wrap",
        }}
      >
        {genero === "masculino" ? (
          <>
            <TouchableOpacity
              onPress={() => setTipo("camisas")}
              style={{
                backgroundColor: tipo === "camisas" ? "#000" : "#E0E0E0",
                padding: 10,
                borderRadius: 20,
              }}
            >
              <Text
                style={{
                  color: tipo === "camisas" ? "#fff" : "#000",
                  fontWeight: "bold",
                  fontSize: 12,
                }}
              >
                CAMISAS
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setTipo("sapatos")}
              style={{
                backgroundColor: tipo === "sapatos" ? "#000" : "#E0E0E0",
                padding: 10,
                borderRadius: 20,
              }}
            >
              <Text
                style={{
                  color: tipo === "sapatos" ? "#fff" : "#000",
                  fontWeight: "bold",
                  fontSize: 12,
                }}
              >
                SAPATOS
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setTipo("relogios")}
              style={{
                backgroundColor: tipo === "relogios" ? "#000" : "#E0E0E0",
                padding: 10,
                borderRadius: 20,
              }}
            >
              <Text
                style={{
                  color: tipo === "relogios" ? "#fff" : "#000",
                  fontWeight: "bold",
                  fontSize: 12,
                }}
              >
                RELOGIOS
              </Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <TouchableOpacity
              onPress={() => setTipo("vestidos")}
              style={{
                backgroundColor: tipo === "vestidos" ? "#000" : "#E0E0E0",
                padding: 10,
                borderRadius: 20,
              }}
            >
              <Text
                style={{
                  color: tipo === "vestidos" ? "#fff" : "#000",
                  fontWeight: "bold",
                  fontSize: 12,
                }}
              >
                VESTIDOS
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setTipo("bolsas")}
              style={{
                backgroundColor: tipo === "bolsas" ? "#000" : "#E0E0E0",
                padding: 10,
                borderRadius: 20,
              }}
            >
              <Text
                style={{
                  color: tipo === "bolsas" ? "#fff" : "#000",
                  fontWeight: "bold",
                  fontSize: 12,
                }}
              >
                BOLSAS
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setTipo("relogios")}
              style={{
                backgroundColor: tipo === "relogios" ? "#000" : "#E0E0E0",
                padding: 10,
                borderRadius: 20,
              }}
            >
              <Text
                style={{
                  color: tipo === "relogios" ? "#fff" : "#000",
                  fontWeight: "bold",
                  fontSize: 12,
                }}
              >
                RELOGIOS
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setTipo("joias")}
              style={{
                backgroundColor: tipo === "joias" ? "#000" : "#E0E0E0",
                padding: 10,
                borderRadius: 20,
              }}
            >
              <Text
                style={{
                  color: tipo === "joias" ? "#fff" : "#000",
                  fontWeight: "bold",
                  fontSize: 12,
                }}
              >
                JOIAS
              </Text>
            </TouchableOpacity>
          </>
        )}
      </View>

      <FlatList
        data={lista}
        numColumns={2}
        columnWrapperStyle={{ gap: 10 }}
        contentContainerStyle={{ gap: 10 }}
        keyExtractor={(i) => i.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => router.push(`/product/${item.id}`)}
            style={{
              flex: 1,
              backgroundColor: "#F5F5F5",
              borderRadius: 12,
              padding: 10,
            }}
          >
            <Image
              source={{ uri: item.thumbnail }}
              style={{ width: "100%", height: 120 }}
              resizeMode="contain"
            />
            <Text
              style={{ fontWeight: "bold", marginTop: 6, fontSize: 13 }}
              numberOfLines={2}
            >
              {pt[item.title] || item.title}
            </Text>
            <Text>R$ {item.price.toFixed(2)}</Text>
            <Text style={{ color: "#2E7D32", fontWeight: "bold" }}>
              {item.discountPercentage}% OFF
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
