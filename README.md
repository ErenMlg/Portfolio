# Portfolio Website

Modern ve yönetilebilir bir portfolio websitesi. Next.js, Node.js, Express.js ve PostgreSQL kullanılarak geliştirilmiştir.

## Özellikler

- Modern ve responsive tasarım
- Admin paneli ile proje yönetimi
- Güvenli kimlik doğrulama
- PostgreSQL veritabanı entegrasyonu

## Teknolojiler

- Frontend: Next.js, TypeScript, Tailwind CSS
- Backend: Node.js, Express.js
- Veritabanı: PostgreSQL
- ORM: Prisma
- Kimlik Doğrulama: JWT

## Kurulum

1. Repoyu klonlayın:
```bash
git clone <repo-url>
cd portfolio
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. PostgreSQL veritabanını kurun ve `.env` dosyasını düzenleyin:
```env
DATABASE_URL="postgresql://username:password@localhost:5432/portfolio"
JWT_SECRET="your-super-secret-key-change-this-in-production"
PORT=3001
```

4. Veritabanı şemasını oluşturun:
```bash
npx prisma migrate dev
```

5. Admin kullanıcısı oluşturun:
```bash
node scripts/create-admin.js
```

6. Uygulamayı başlatın:
```bash
# Development modunda
npm run dev

# Production modunda
npm run build
npm start
```

## Kullanım

1. Frontend: `http://localhost:3000`
2. Admin Panel: `http://localhost:3000/admin`
3. Backend API: `http://localhost:3001`

## Admin Paneli

Admin paneline erişmek için:
1. `/admin` sayfasına gidin
2. Varsayılan kullanıcı adı: `admin`
3. Varsayılan şifre: `admin123`

**Not:** Güvenlik için varsayılan şifreyi değiştirmeyi unutmayın!
