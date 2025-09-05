import { ContentData } from '../types';

export const content: ContentData = {
  tr: {
    hero: {
      title: "Creepy Bot",
      subtitle: "Gizlilik Politikası ve Kullanım Şartları"
    },
    navigation: {
      privacy: "Gizlilik Politikası",
      terms: "Kullanım Şartları",
      contact: "İletişim"
    },
    privacyPolicy: {
      title: "📜 Gizlilik Politikası (Privacy Policy)",
      effectiveDate: "Yürürlük Tarihi: 5 Eylül 2025",
      sections: [
        {
          title: "Giriş",
          content: "Creepy, çok amaçlı bir Discord botudur. Gizliliğinize saygı duyuyoruz ve yalnızca gerekli olan minimum bilgileri topluyoruz. Bu politika hangi verileri topladığımızı, nasıl kullandığımızı ve kullanıcıların hangi seçimlere sahip olduğunu açıklar."
        },
        {
          title: "Topladığımız Veriler",
          content: [
            "Sunucu/rol/kanal kimlikleri: (ör. otomatik rol atama için rol ID'leri)",
            "Ayarlar: Özelliklerin açık/kapalı durumu",
            "Geçici işlem verileri: Komutları çalıştırmak için mesaj içeriği okunur fakat kaydedilmez. Spotify/durum verileri anlık işlenir, saklanmaz."
          ],
          type: "list"
        },
        {
          title: "Verileri Kullanım Amaçlarımız",
          content: [
            "Moderasyon, özel odalar, otomatik roller gibi özellikleri sağlamak",
            "Sunucuya özel ayarlarınızı hatırlamak",
            "Reklam, profil çıkarma veya yapay zeka eğitimi için kullanmayız"
          ],
          type: "list"
        },
        {
          title: "Hukuki Dayanak",
          content: [
            "Sunucu sahiplerinin isteğiyle hizmeti sunmak (sözleşmesel gereklilik)",
            "Güvenlik ve istikrar için işleme (meşru menfaat)"
          ],
          type: "list"
        },
        {
          title: "Saklama Süresi",
          content: [
            "Ayarlar: Bot kaldırılana, sıfırlanana veya silme talebi yapılana kadar saklanır",
            "Geçici veriler: Bellekte işlenir, saklanmaz"
          ],
          type: "list"
        },
        {
          title: "Seçenekleriniz",
          content: [
            "Sunucu yöneticileri istedikleri zaman özellikleri kapatabilir",
            "Botu sunucudan kaldırmak tüm işlemleri durdurur"
          ],
          type: "list"
        },
        {
          title: "Çocukların Gizliliği",
          content: "Discord'un yaş kısıtlamalarına uyarız, 13 yaş altından bilinçli veri toplamayız."
        },
        {
          title: "Güvenlik",
          content: "Yerel CroxyDB depolama ve erişim kontrolleri uygulanır. Mesaj içerikleri kayıt altına alınmaz."
        },
        {
          title: "İletişim",
          content: "Silme talepleri veya sorular için: [İletişim bilginizi buraya ekleyin]"
        }
      ]
    },
    termsOfService: {
      title: "📜 Kullanım Şartları (Terms of Service)",
      effectiveDate: "Son Güncelleme: 5 Eylül 2025",
      sections: [
        {
          title: "1. Kabul",
          content: "Creepy'yi sunucunuza ekleyerek bu şartları kabul etmiş olursunuz."
        },
        {
          title: "2. Uygunluk",
          content: "Discord'un Hizmet Şartları ve Topluluk Kurallarına uymalısınız."
        },
        {
          title: "3. Özellikler ve İşleme",
          content: [
            "Prefix komutları çalıştırmak için mesaj okunur, saklanmaz",
            "Spotify/durum temelli roller isteğe bağlıdır",
            "Ayarlar CroxyDB'de saklanır"
          ],
          type: "list"
        },
        {
          title: "4. Yasaklı Kullanımlar",
          content: [
            "Discord politikalarını veya yasaları ihlal etmek",
            "Spam, taciz, yetkisiz veri toplama",
            "Servisi bozma, tersine mühendislik"
          ],
          type: "list"
        },
        {
          title: "5. Hizmet ve Değişiklikler",
          content: "Bot \"olduğu gibi\" sunulur, özellikler değişebilir."
        },
        {
          title: "6. Fesih",
          content: "İhlal durumunda erişim kısıtlanabilir. Botu kaldırarak siz de sonlandırabilirsiniz."
        },
        {
          title: "7. Sorumluluk Reddi",
          content: "Bot kullanımından doğacak dolaylı veya beklenmedik zararlardan sorumlu değiliz."
        },
        {
          title: "8. Veri ve Gizlilik",
          content: "Kullanımınız ayrıca Gizlilik Politikası'na tabidir. Veri satışı yapılmaz, mesaj içerikleri yapay zekâ eğitiminde kullanılmaz."
        },
        {
          title: "9. İletişim",
          content: "Destek için: [İletişim bilginizi buraya ekleyin]"
        }
      ]
    },
    footer: {
      description: "Creepy - Çok amaçlı Discord botu. Gizliliğinizi koruyoruz.",
      contact: "İletişim için: [İletişim bilginizi buraya ekleyin]"
    }
  },
  en: {
    hero: {
      title: "Creepy Bot",
      subtitle: "Privacy Policy and Terms of Service"
    },
    navigation: {
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      contact: "Contact"
    },
    privacyPolicy: {
      title: "📜 Privacy Policy",
      effectiveDate: "Effective Date: September 5, 2025",
      sections: [
        {
          title: "Introduction",
          content: "Creepy is a multi-purpose Discord bot. We respect your privacy and only collect the minimum data required. This policy explains what we collect, how we use it, and what choices you have."
        },
        {
          title: "Data We Collect",
          content: [
            "Server/role/channel IDs (e.g., auto-role IDs)",
            "Settings: feature toggles (on/off)",
            "Ephemeral processing: message content is read to process commands but not stored. Presence data (e.g., Spotify) is processed in real time and not stored."
          ],
          type: "list"
        },
        {
          title: "How We Use Data",
          content: [
            "To provide features like moderation, private channels, auto roles",
            "To remember server-specific configuration",
            "We do not use Discord data for ads, profiling, or AI training"
          ],
          type: "list"
        },
        {
          title: "Legal Basis",
          content: [
            "Contractual necessity (server admins request the service)",
            "Legitimate interests (security and reliability)"
          ],
          type: "list"
        },
        {
          title: "Retention",
          content: [
            "Config data kept until bot is removed/reset or deletion requested",
            "Operational data is processed in memory only"
          ],
          type: "list"
        },
        {
          title: "Your Choices",
          content: [
            "Admins can disable features anytime",
            "Removing the bot stops all processing"
          ],
          type: "list"
        },
        {
          title: "Children's Privacy",
          content: "We comply with Discord's age requirements and do not knowingly collect from underage users."
        },
        {
          title: "Security",
          content: "Local CroxyDB storage, least-data principles, no message content logging."
        },
        {
          title: "Contact",
          content: "For deletion or privacy questions: [Add your contact information here]"
        }
      ]
    },
    termsOfService: {
      title: "📜 Terms of Service",
      effectiveDate: "Last Updated: September 5, 2025",
      sections: [
        {
          title: "1. Acceptance",
          content: "By adding Creepy to your server, you agree to these Terms."
        },
        {
          title: "2. Eligibility",
          content: "You must comply with Discord ToS and Community Guidelines."
        },
        {
          title: "3. Features & Processing",
          content: [
            "Prefix commands require reading message content at runtime, not stored",
            "Presence-based roles (e.g., Spotify) are optional",
            "Config data stored in CroxyDB"
          ],
          type: "list"
        },
        {
          title: "4. Prohibited Use",
          content: [
            "Violating Discord rules or laws",
            "Spam, harassment, unauthorized data collection",
            "Reverse engineering or disrupting the bot"
          ],
          type: "list"
        },
        {
          title: "5. Availability & Changes",
          content: "Bot is provided \"as is\". Features may change anytime."
        },
        {
          title: "6. Termination",
          content: "Misuse may result in termination. You may terminate by removing the bot."
        },
        {
          title: "7. Liability",
          content: "We are not liable for indirect or consequential damages."
        },
        {
          title: "8. Data & Privacy",
          content: "Also governed by our Privacy Policy. No data selling or AI training."
        },
        {
          title: "9. Contact",
          content: "Support: [Add your contact information here]"
        }
      ]
    },
    footer: {
      description: "Creepy - Multi-purpose Discord bot. Your privacy protected.",
      contact: "Contact: [Add your contact information here]"
    }
  }
};