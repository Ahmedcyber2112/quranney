# خطوات النشر السريع على Vercel

## 1. تجهيز المشروع محلياً
```bash
npm run build
```

## 2. إنشاء حساب Vercel
- زيارة [vercel.com](https://vercel.com)
- إنشاء حساب جديد أو تسجيل الدخول

## 3. ربط المشروع
### الطريقة الأولى: من GitHub
1. رفع المشروع على GitHub
2. في Vercel اختر "Import Git Repository"
3. اختيار المشروع من GitHub

### الطريقة الثانية: Vercel CLI
```bash
npm i -g vercel
vercel
```

## 4. إضافة متغيرات البيئة
في لوحة تحكم Vercel:
- انتقال إلى Project Settings
- Environment Variables
- إضافة:

| Variable Name | Value | Environment |
|---------------|-------|-------------|
| `GOOGLE_AI_API_KEY` | your_api_key | Production, Preview, Development |
| `NEXT_PUBLIC_VERCEL_ANALYTICS` | `true` | Production, Preview, Development |

## 5. إعادة النشر
بعد إضافة متغيرات البيئة، اذهب إلى:
- Deployments
- اختر آخر deployment
- اضغط "Redeploy"

## ✅ المشروع جاهز!
سيكون المشروع متاح على: `https://your-project-name.vercel.app`