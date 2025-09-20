# خطوات النشر السريع على Vercel

## 1. تجهيز المشروع محلياً
```bash
npm run build
```

## 2. رفع المشروع على GitHub
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

## 3. إنشاء حساب Vercel
- زيارة [vercel.com](https://vercel.com)
- إنشاء حساب جديد أو تسجيل الدخول

## 4. نشر المشروع
### الطريقة الأولى: من GitHub (الأسهل)
1. في Vercel اختر "Add New..." → "Project"
2. اختر "Import Git Repository"
3. اختيار المشروع من GitHub
4. Framework Preset: Next.js (يُكتشف تلقائياً)
5. اضغط "Deploy"

### الطريقة الثانية: Vercel CLI
```bash
npm i -g vercel
vercel
```

## 5. إضافة متغيرات البيئة
في لوحة تحكم Vercel:
- انتقال إلى Project Settings
- Environment Variables
- إضافة:

| Variable Name | Value | Environment |
|---------------|-------|-------------|
| `GOOGLE_AI_API_KEY` | your_api_key | Production, Preview, Development |
| `NEXT_PUBLIC_VERCEL_ANALYTICS` | `true` | Production, Preview, Development |

### للحصول على Google AI API Key:
1. زيارة [Google AI Studio](https://aistudio.google.com/app/apikey)
2. إنشاء API key جديد
3. نسخ المفتاح

## 6. إعادة النشر
بعد إضافة متغيرات البيئة:
- Deployments → اختر آخر deployment → "Redeploy"

## ⚠️ ملاحظات مهمة
- **لا تحتاج لملف `vercel.json`** - Next.js يعمل افتراضياً
- **تأكد من رفع آخر التحديثات** على GitHub قبل النشر
- **متغيرات البيئة ضرورية** لعمل ميزة التفسير

## ✅ المشروع جاهز!
سيكون المشروع متاح على: `https://your-project-name.vercel.app`