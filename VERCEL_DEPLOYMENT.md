# إعدادات النشر على Vercel

## متطلبات النشر
1. إنشاء حساب على [Vercel](https://vercel.com)
2. ربط المشروع بـ GitHub repository
3. إضافة متغيرات البيئة في لوحة تحكم Vercel

## متغيرات البيئة المطلوبة
```
GOOGLE_AI_API_KEY=your_google_ai_api_key_here
NEXT_PUBLIC_VERCEL_ANALYTICS=true
NEXT_TELEMETRY_DISABLED=1
```

## الحصول على مفتاح Google AI

1. زيارة [Google AI Studio](https://aistudio.google.com/app/apikey)
2. إنشاء مشروع جديد أو استخدام مشروع موجود
3. إنشاء API key جديد
4. نسخ المفتاح وإضافته في متغيرات البيئة

## إضافة متغيرات البيئة في Vercel

### الطريقة الأولى: من لوحة التحكم
1. انتقال إلى [Vercel Dashboard](https://vercel.com/dashboard)
2. اختيار المشروع
3. انتقال إلى **Settings** → **Environment Variables**
4. إضافة المتغيرات التالية:
   - **Name**: `GOOGLE_AI_API_KEY` **Value**: `your_actual_api_key`
   - **Name**: `NEXT_PUBLIC_VERCEL_ANALYTICS` **Value**: `true`
   - **Name**: `NEXT_TELEMETRY_DISABLED` **Value**: `1`

### الطريقة الثانية: من خلال Vercel CLI
```bash
vercel env add GOOGLE_AI_API_KEY
vercel env add NEXT_PUBLIC_VERCEL_ANALYTICS
vercel env add NEXT_TELEMETRY_DISABLED
```

## إعدادات النشر التلقائي
- **Framework**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`
- **Development Command**: `npm run dev`

## تحسينات الأداء
- تم تفعيل Turbopack للتطوير السريع
- تم تحسين الصور باستخدام Next.js Image optimization
- تم تفعيل Static Generation للصفحات
- تم إضافة Vercel Analytics لمراقبة الأداء

## الدومين المخصص (اختياري)
يمكن إضافة دومين مخصص من لوحة تحكم Vercel:
1. انتقال إلى Project Settings
2. اختيار Domains
3. إضافة الدومين المطلوب

## مراقبة الأخطاء
يمكن مراقبة الأخطاء والأداء من خلال:
- Vercel Analytics (مُفعّل افتراضياً)
- Vercel Functions logs
- Real User Monitoring (RUM)