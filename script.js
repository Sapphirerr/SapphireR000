document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('img').forEach(img => {
        img.onerror = function() {
            this.src = 'https://via.placeholder.com/300x300/cccccc/666666?text=ไม่มีรูป';
        };
    });

    //  ====================  สินค้า ====================
    const products = [
        {id: 1, cat: 'อาหาร', name: 'ราเม็งกึ่งสำเร็จรูปฮอกไกโด', nameEN: 'Hokkaido Instant Ramen', price: 599, description: 'ราเม็งสำเร็จรูปสูตรฮอกไกโด เส้นนุ่ม น้ำซุปกลมกล่อม เหมาะสำหรับมื้อด่วน' , descriptionEN: 'Hokkaido-style instant ramen with chewy noodles and rich, savory broth. Perfect for a quick meal.'},
        {id: 2, cat: 'อาหาร', name: 'แกงกะหรี่กึ่งสำเร็จรูปสไตล์ซัปโปโร', price: 599, description: 'แกงกะหรี่เข้มข้นสไตล์ซัปโปโร รสเผ็ดเล็กน้อย เหมาะทานคู่ข้าวร้อนๆ'},
        {id: 3, cat: 'อาหาร', name: 'เนยฮอกไกโด', price: 299, description: 'เนยแท้จากนมฮอกไกโด เข้มข้น หอม เหมาะสำหรับทาขนมปังหรือใช้ในการปรุงอาหาร'},
        {id: 4, cat: 'อาหาร', name: 'ชีสฮอกไกโด', price: 299, description: 'ชีสสดใหม่จากนมวัวฮอกไกโด เมาท์นุ่มนวล รสนมหวานธรรมชาติ'},
        {id: 5, cat: 'อาหาร', name: 'ซุปข้าวโพดแบบแพ็ก', price: 300, description: 'ซุปข้าวโพดเหนือกำลังดี เข้มข้น ใช้ได้ทันทีเมื่อเดือดน้ำ'},
        {id: 6, cat: 'อาหาร', name: 'ข้าวโพดอบกรอบ', price: 400, description: 'ข้าวโพดหวานจากไร่ฮอกไกโด อบกรอบอร่อย เหมาะเป็นของว่าง'},
        {id: 7, cat: 'อาหาร', name: 'หอยเชลล์ตากแห้ง', price: 1000, description: 'หอยเชลล์สดใหม่ตากแห้งเก็บรส เพิ่มความเค็มอันดีลงในอาหาร'},
        {id: 8, cat: 'อาหาร', name: 'ปลาแซลมอนรมควัน', price: 1500, description: 'ปลาแซลมอนรมควันหรือหมักเค็มเนื้อสวย ใช้แบ่งเป็นอาหารคำหนึ่งหรือของว่าง'},
        {id: 9, cat: 'อาหาร', name: 'เบคอน/แฮมสไตล์ฮอกไกโด', price: 899, description: 'เบคอนและแฮมสไตล์ฮอกไกโด เนื้อสวย ปรุงอบสูบไม่เข้มเกินไป เหมาะกับอาหารเช้า'},
        {id: 10, cat: 'อาหาร', name: 'นมผงฮอกไกโดสำหรับทำของหวาน', price: 500, description: 'นมผงเนื้อเข้มข้น เหมาะสำหรับทำเค้ก ขนม และเครื่องดื่มต่างๆ'},
        {id: 11, cat: 'ขนม', name: 'คุกกี้นมฮอกไกโด', price: 900, description: 'คุกกี้กรุบกรอบ กลิ่นนมนุ่มๆ ผลิตจากนมฮอกไกโดแท้'},
        {id: 12, cat: 'ขนม', name: 'คอร์นช็อกโกแลต', price: 399, description: 'ขนมคอร์นช็อกโกแลต หวานกำลังดี ห่อพกพาสะดวก'},
        {id: 13, cat: 'ขนม', name: 'ช็อกโกแลตนมสด', price: 799, description: 'ช็อกโกแลตเนื้อละเอียดจากนมสดฮอกไกโด หวานพอดี อร่อยละมุน'},
        {id: 14, cat: 'ขนม', name: 'มันฝรั่งแท่งอบกรอบ (jagapokkuru สไตล์นั้น)', price: 799, description: 'มันฝรั่งแท่งอบกรอบแบบญี่ปุ่น เคลือบช็อกโกแลต รสชาติเข้มข้น'},
        {id: 15, cat: 'ขนม', name: 'คาราเมลนม', price: 350, description: 'ลูกอมคาราเมลนมเชื่อม หวานพอดี มีกลิ่นนมฮอกไกโดอพยพ'},
        {id: 16, cat: 'ขนม', name: 'เค้กชีสซอฟต์แบบแพ็ก', price: 899, description: 'เค้กชีสซอฟต์อร่อยนุ่มนวล ห่อสะดวก พกพาง่าย เหมาะเป็นของฝาก'},
        {id: 17, cat: 'ขนม', name: 'โมจิถั่วแดงแบบแช่เย็น', price: 400, description: 'โมจิธรรมชาติเต่อห้มถั่วแดง แช่เย็นเสิร์ฟ หวานหลายชั้น'},
        {id: 18, cat: 'ขนม', name: 'แพนเค้กสำเร็จรูปสไตล์ซัปโปโร', price: 900, description: 'แพนเค้กมินิอร่อยนุ่ม สำเร็จรูป เข้าไมโครเวฟอุ่นได้'},
        {id: 19, cat: 'ขนม', name: 'ไอซ์คุกกี้ (แบบเก็บได้)', price: 699, description: 'ไอซ์คุกกี้เนื้อกรุบกรอบ เคลือบครีมหอม อร่อยทั้งเชื่อ'},
        {id: 20, cat: 'ขนม', name: 'บัตเตอร์แซนด์ (คุกกี้สอดไส้ครีมเนย)', price: 750, description: 'คุกกี้ชนิดพิเศษสอดไส้ครีมเนย เนื้อเหนียว ละลายหนึ่ง'},
        {id: 203, cat: 'ขนม', name: 'Kit Kat Hokkaido', price: 799, description: 'Kit Kat ฉบับพิเศษฮอกไกโด รสชาติอ่อน เป็นของฝากยอดนิยม'},
        {id: 21, cat: 'ของใช้เครื่องครัว', name: 'แก้วแกะลายฮอกไกโด', price: 499, description: 'แก้วแกะลายสวยงาม ทำจากแก้วคุณภาพสูง เหมาะเป็นของฝาก'},
        {id: 22, cat: 'ของใช้เครื่องครัว', name: 'จานเซรามิกลายธรรมชาติฮอกไกโด', price: 675, description: 'จานเซรามิกเคลือบลายธรรมชาติ ทนความร้อน เหมาะสำหรับเสิร์ฟอาหาร'},
        {id: 23, cat: 'ของใช้เครื่องครัว', name: 'ชามไม้แกะมือ', price: 400, description: 'ชามไม้ทำมือดีเทลละเอียด เหมาะสำหรับใส่อาหารหรือตกแต่งโต๊ะ'},
        {id: 24, cat: 'ของใช้เครื่องครัว', name: 'ถ้วยชาแบบญี่ปุ่น', price: 500, description: 'ถ้วยชาแบบญี่ปุ่นโบราณ เคลือบเกลไลท์ สวยงาม บรรยากาศศิลป์'},
        {id: 25, cat: 'ของใช้เครื่องครัว', name: 'แก้วเบียร์ลายภูเขาไฟ', price: 800, description: 'แก้วเบียร์ลายภูเขาไฟฮอกไกโด ดีไซน์สวยงาม เหมาะเป็นหลักฐานแอลกอฮอล์'},
        {id: 26, cat: 'ของใช้เครื่องครัว', name: 'มีดครัวสไตล์ญี่ปุ่น', price: 1500, description: 'มีดครัวญี่ปุ่นคมเหลือเช่น ใบเหล็กสูงประสิทธิ์ ตัวจับสะดวก'},
        {id: 27, cat: 'ของใช้เครื่องครัว', name: 'กระติกน้ำลายหมีโฮคุโตะ', price: 1200, description: 'กระติกน้ำลายหมี เก็บความเย็น-ร้อน นิยมสะสม เหมาะเป็นของขวัญ'},
        {id: 28, cat: 'ของใช้เครื่องครัว', name: 'ตะเกียบไม้แกะลาย', price: 500, description: 'ตะเกียบไม้แกะลายฮอกไกโด ทำมือประณีต เก็บร้อน ใช้สะดวก'},
        {id: 29, cat: 'ของใช้เครื่องครัว', name: 'ที่รองแก้วไม้', price: 500, description: 'ที่รองแก้วไม้ทำมือ ป้องกันรอยน้ำบนโต๊ะ ดีไซน์เรียบง่ายสวยงาม'},
        {id: 30, cat: 'ของใช้เครื่องครัว', name: 'ผ้าเช็ดครัวลายฮอกไกโด', price: 400, description: 'ผ้าเช็ดครัวลายฮอกไกโด ชั้นคุณภาพ ซึมน้ำดี ใช้ได้นาน'},
        {id: 31, cat: 'Skincare', name: 'สบู่ธรรมชาติจากนมฮอกไกโด', price: 399, description: 'สบู่สูตรนมอ่อนโยน เหมาะสำหรับผิวบอบบาง ให้ความชุ่มชื้น'},
        {id: 32, cat: 'Skincare', name: 'โลชั่นนมนุ่ม', price: 999, description: 'โลชั่นบำรุงเข้มข้นกลิ่นนม ให้ความนุ่มชุ่มชื้น ติดทนนาน'},
        {id: 33, cat: 'Skincare', name: 'สครับถั่วแดงอาซึกิ', price: 850, description: 'สครับธรรมชาติจากถั่วแดง อ่อนโยน ลบตัวตายออกได้ดี ไม่ระคายเคืองผิว'},
        {id: 34, cat: 'Skincare', name: 'ครีมทามือกลิ่นลาเวนเดอร์', price: 699, description: 'ครีมทามือกลิ่นลาเวนเดอร์หอม บำรุงมือนุ่ม ห่ืดดี ไม่เหนียว'},
        {id: 35, cat: 'Skincare', name: 'น้ำมันหอมลาเวนเดอร์', price: 800, description: 'น้ำมันหอมลาเวนเดอร์แท้ 100% เพื่อผ่อนคลาย นอนหลับสะบายใจ'},
        {id: 36, cat: 'Skincare', name: 'แชมพูสมุนไพรฮอกไกโด', price: 700, description: 'แชมพูสมุนไพรธรรมชาติจากฮอกไกโด ลดหลุดผม บำรุงเส้นผมนุ่มเงางาม'},
        {id: 37, cat: 'Skincare', name: 'ครีมน้ำนมบำรุงผิว', price: 900, description: 'ครีมน้ำนมบำรุงเข้มข้น ให้ความชุ่มชื้นยาวนาน ผิวสด usepackage สว่างใส'},
        {id: 38, cat: 'Skincare', name: 'เจลอาบน้ำกลิ่นข้าวโพดหวาน', price: 1200, description: 'เจลอาบน้ำกลิ่นข้าวโพดหวาย มีฟองเยอะ ล้างสะอาดไว้ไม่แห้ง'},
        {id: 39, cat: 'Skincare', name: 'บอดี้โลชั่นกลิ่นดอกไม้เหนือ', price: 1000, description: 'บอดี้โลชั่นหอมดอกไม้เหนือ บำรุงท่นอนหลังอาบน้ำ ผิวเนียนนุ่ม'},
        {id: 40, cat: 'Skincare', name: 'บาล์มปากน้ำผึ้งฮอกไกโด', price: 900, description: 'บาล์มปากน้ำผึ้งแท้ บำรุงปากชุ่มชื้น ปลอดสารเคมี ใช้อร่อย'},
        {id: 41, cat: 'ของใช้ทั่วไป', name: 'พวงกุญแจลายฮอกไกโด', price: 800, description: 'พวงกุญแจดีไซน์ฮอกไกโด ขนาดพกพา เหมาะเป็นของฝากเล็กๆ'},
        {id: 42, cat: 'ของใช้ทั่วไป', name: 'หมีเทพ', price: 9999999, description: 'หมีเทพไม่มีขายหน้าร้าน สินค้าลับในนี้ ซื้อไปเพิ่มดวง99999เท่า'},
        {id: 43, cat: 'ของใช้ทั่วไป', name: 'กระเป๋าผ้าแผนที่ฮอกไกโด', price: 500, description: 'กระเป๋าผ้าลายแผนที่ฮอกไกโด ใช้ได้ไม่ลลซ้ำ ดีไซน์คุณสมบัติ'},
        {id: 44, cat: 'ของใช้ทั่วไป', name: 'เคสโทรศัพท์ลายภูเขาไฟ', price: 500, description: 'เคสโทรศัพท์ลายภูเขาไฟฮอกไกโด บำรุงเครื่อง ดีไซน์สวยงาม'},
        {id: 45, cat: 'ของใช้ทั่วไป', name: 'ร่มลายหิมะ', price: 799, description: 'ร่มลายหิมะสลับกัน ใช้ขับหลุดน้ำดี ห้ามทึบเข้ม'},
        {id: 46, cat: 'ของใช้ทั่วไป', name: 'ปากกาลายซัปโปโร', price: 300, description: 'ปากกาลายซัปโปโร เขียนหนักเบา คิดบันทึกสะดวก เหมาะเป็นของฝาก'},
        {id: 47, cat: 'ของใช้ทั่วไป', name: 'ผ้าเช็ดหน้าเทนุกิ', price: 299, description: 'ผ้าเช็ดหน้าเทนุกิโดสินทร์ ซึมน้ำดี นุ่มเด้ง ใช้ได้นาน'},
        {id: 48, cat: 'ของใช้ทั่วไป', name: 'แก้วน้ำพกพาลายวินเทอร์', price: 900, description: 'แก้วน้ำพกพาลายวินเทอร์ฮอกไกโด เก็บร้อนเย็น นำเดินทางสะดวก'},
        {id: 49, cat: 'ของใช้ทั่วไป', name: 'โปสการ์ดวิวหิมะ', price: 599, description: 'โปสการ์ดวิวหิมะฮอกไกโด ภาพสวยทะลุจอ เขียนส่งเพื่อนได้'},
        {id: 50, cat: 'ของใช้ทั่วไป', name: 'พวงติดกระเป๋ารูปเพนกวิน', price: 400, description: 'พวงติดกระเป๋ารูปเพนกวินน่ารัก ขนาดพกพา เพิ่มความเก่าของกระเป๋า'},
        {id: 51, cat: 'เสื้อผ้า', name: 'เสื้อยืดลายฮอกไกโด', price: 1200, description: 'เสื้อยืดผ้าคอตตอนพรีเมียม พิมพ์ลายฮอกไกโด ทนต่อการซัก'},
        {id: 52, cat: 'เสื้อผ้า', name: 'เสื้อผ้าลายชนเผ่าไอนุ', price: 2500, description: 'เสื้อผ้าลายชนเผ่าไอนุ ลายดั้งเดิม เหมาะสำหรับของฝากแบบมีเรื่องเล่า'},
        {id: 53, cat: 'เสื้อผ้า', name: 'เสื้อฮู้ดลายหมีฮอกไกโด', price: 3000, description: 'เสื้อฮู้ดลายหมีฮอกไกโด ผ้าซื้อนวล อบอุ่น ตัดเย็บสวยงาม'},
        {id: 54, cat: 'เสื้อผ้า', name: 'ถุงเท้าลายหิมะ', price: 599, description: 'ถุงเท้าลายหิมะฮอกไกโด ผ้ากำมะหยี่นุ่ม อบอุ่น ใส่นุ่มสวยงาม'},
        {id: 55, cat: 'เสื้อผ้า', name: 'หมวกไหมพรม', price: 499, description: 'หมวกไหมพรมฮอกไกโด ใส่อุ่น บังแดดได้ดี ดีไซน์ตกแต่งตัวเอง'},
        {id: 56, cat: 'เสื้อผ้า', name: 'ผ้าพันคอไหมพรม', price: 999, description: 'ผ้าพันคอไหมพรมนิ่มนวล เก็บความอุ่น สวมใส่อบอุ่น ดีไซน์อ่อนหวาน'},
        {id: 57, cat: 'เสื้อผ้า', name: 'แจ็กเก็ตลายภูมิภาคฮอกไกโด', price: 2300, description: 'แจ็กเก็ตลายภูมิภาคฮอกไกโด ผ้าดี ตัดเย็บสวย อุ่นกันลม'},
        {id: 58, cat: 'เสื้อผ้า', name: 'ถุงมือฤดูหนาว', price: 500, description: 'ถุงมือฤดูหนาวท้องถิ่น เนื้อกำมะหยี่หนา อบอุ่น กันความหนาว'},
        {id: 59, cat: 'เสื้อผ้า', name: 'เสื้อยืดกราฟิกเมืองซัปโปโร', price: 999, description: 'เสื้อยืดกราฟิกเมืองซัปโปโร ผ้าคอตตอน100% พิมพ์สดใส ใส่ติดมากชน'},
        {id: 60, cat: 'เสื้อผ้า', name: 'เสื้อกันลมลายทะเลเหนือ', price: 3000, description: 'เสื้อกันลมลายทะเลเหนือ ผ้านุ่ม ป้องกันลมเย็น ดีไซน์ทันสมัย'},
        {id: 61, cat: 'เครื่องปรุง', name: 'ซุปมิโซะฮอกไกโด', price: 600, description: 'มิโสะสูตรพิเศษจากฮอกไกโด กลิ่นหอม เหมาะสำหรับทำซุปหรือรสชาติพื้นฐาน'},
        {id: 62, cat: 'เครื่องปรุง', name: 'น้ำซุปทงคัตสึแบบผง', price: 800, description: 'ผงน้ำซุปทงคัตสึ เข้มข้น ใช้ทำราเม็งหรือสตูว์ให้รสลึก'},
        {id: 63, cat: 'เครื่องปรุง', name: 'ซอสซีฟู้ดสำหรับปิ้งย่าง', price: 800, description: 'ซอสซีฟู้ดแผ่นพิเศษ เคมีเข้มข้น เหมาะสำหรับปิ้งย่างอร่อย'},
        {id: 64, cat: 'เครื่องปรุง', name: 'ผงแกงกะหรี่ฮอกไกโด', price: 500, description: 'ผงแกงกะหรี่สำเร็จรูป สูตรฮอกไกโด หมั่นไส้ ทำแกงหรือซุปได้ทันที'},
        {id: 65, cat: 'เครื่องปรุง', name: 'ผงปลาคัตสึโอะ', price: 500, description: 'ผงปลาคัตสึโอะแท้ กลิ่นหอม เข้มข้น เพิ่มรสชาติอาหารทุกจาน'},
        {id: 66, cat: 'เครื่องปรุง', name: 'ซอสถั่วเหลืองกลิ่นหวาน', price: 750, description: 'ซอสถั่วเหลืองกลิ่นหวาน ตัวเข้ม เหมาะสำหรับจิ้มหรือปรุงอาหาร'},
        {id: 67, cat: 'เครื่องปรุง', name: 'น้ำมันงาคั่ว', price: 899, description: 'น้ำมันงาคั่วแท้ 100% กลิ่นหอมนุ่ม เหมาะสำหรับซอสหรือสลัด'},
        {id: 68, cat: 'เครื่องปรุง', name: 'เกลือดอกไม้ทะเลฮอกไกโด', price: 999, description: 'เกลือดอกไม้ทะเลพิเศษ คุณภาพสูง เหมาะสำหรับปรุงรูปอาหารพิเศษ'},
        {id: 69, cat: 'เครื่องปรุง', name: 'ฟุริคาเกะปลาแซลมอน', price: 700, description: 'ฟุริคาเกะปลาแซลมอน ผง พัฒนากระดาษมื้อหน้า เหมาะโรยข้าวหรือการบรี'},
        {id: 70, cat: 'เครื่องปรุง', name: 'น้ำซุปคอมบุสาหรับทำราเม็ง', price: 500, description: 'น้ำซุปคอมบุสากำหนด ใช้ทำราเม็งรสชาติเข้มข้น หลือหน้าจริงๆ'},
        {id: 71, cat: 'งานฝีมือ', name: 'ไม้แกะสลักรูปหมีฮอกไกโด', price: 1599, description: 'งานแกะสลักไม้ท้องถิ่น รูปหมี ดีเทลสวย เหมาะเป็นของตกแต่ง'},
        {id: 72, cat: 'งานฝีมือ', name: 'จานไม้แกะมือ', price: 899, description: 'จานไม้ทำมือ ลวดลายประณีต เหมาะสำหรับเสิร์ฟของว่างหรือโชว์'},
        {id: 73, cat: 'งานฝีมือ', name: 'เครื่องประดับทำจากไม้ท้องถิ่น', price: 1500, description: 'เครื่องประดับหนึ่งชิ้น ทำจากไม้ท้องถิ่น ปะยา งานดีลวดลายสวยงาม'},
        {id: 74, cat: 'งานฝีมือ', name: 'แก้วทำมือสไตล์ฮอกไกโด', price: 1200, description: 'แก้วทำมือโจ้น ดีไซน์เก่าแบบฮอกไกโด สะดวกแล่วสงค์ใช้ดี'},
        {id: 75, cat: 'งานฝีมือ', name: 'ตุ๊กตาไอนุ', price: 1600, description: 'ตุ๊กตาไอนุทำมือ งานสวย ปะยา สีสดหน้าที่เฉลี่ยสะสมวิถีชาติพันธุ์'},
        {id: 76, cat: 'งานฝีมือ', name: 'เข็มกลัดทำมือ', price: 1500, description: 'เข็มกลัดทำมือดีเทลสวย ใช้ประดับเสื้อผ้า ถุงเดินทาง ดีเท่าเห็นขอบ'},
        {id: 77, cat: 'งานฝีมือ', name: 'นกไม้', price: 1777, description: 'นกไม้แกะสลักทำมือ สิ่งประดับห้อง ดีไซน์เอกลักษณ์ งานประณีต'},
        {id: 78, cat: 'งานฝีมือ', name: 'กล่องไม้แกะลาย', price: 900, description: 'กล่องไม้แกะลายฮอกไกโด ใช้เก็บสิ่งของ ดีไซน์ประณีต งานละเอียด'},
        {id: 79, cat: 'งานฝีมือ', name: 'เครื่องรางทำจากวัสดุธรรมชาติ', price: 9999, description: 'เครื่องรางวัสดุธรรมชาติ หนึ่งชิ้นเท่านั้น งานพิเศษ สะสมมูลค่า'},
        {id: 80, cat: 'งานฝีมือ', name: 'โคมไฟไม้แกะสไตล์ญี่ปุ่น', price: 3000, description: 'โคมไฟไม้แกะสไตล์ญี่ปุ่น ประดับแสง สร้างบรรยากาศโบราณ งานละเอียด'},
        {id: 81, cat: 'ของจิปาถะ', name: 'กระดาษโน้ตกาว (โพสต์อิท) ลายฮอกไกโด', price: 400, description: 'กระดาษโน้ตกาวลายฮอกไกโด ขนาดกะทัดรัด เหมาะสำหรับจดเตือน'},
        {id: 82, cat: 'ของจิปาถะ', name: 'ปากกาลูกลื่นลายฮอกไกโด', price: 500, description: 'ปากกาลายธีมฮอกไกโด หมึกลื่น เขียนนุ่ม เหมาะเป็นของฝาก'},
        {id: 83, cat: 'ของจิปาถะ', name: 'เทปมาสกิ้งลายฮอกไกโด', price: 799, description: 'เทปมาสกิ้งลายฮอกไกโด ใช้ห่อของหลือแต่งตกแต่ง ดีไซน์สวยงาม'},
        {id: 84, cat: 'ของจิปาถะ', name: 'ชุดโปสการ์ดฮอกไกโด', price: 799, description: 'ชุดโปสการ์ดฮอกไกโด 6 ใบ ภาพสวย เก็บความทรงจำ'},
        {id: 85, cat: 'ของจิปาถะ', name: 'สมุดโน้ตลายฮอกไกโด', price: 699, description: 'สมุดโน้ตลายฮอกไกโด เนื้อกระดาษดี ใช้เขียนสะดวก ดีไซน์สวยงาม'},
        {id: 86, cat: 'ของจิปาถะ', name: 'แฟ้มใส (Clear File) ฮอกไกโด', price: 777, description: 'แฟ้มใส Clear File ลายฮอกไกโด เก็บกระดาษเอกสาร ป้องกันคราบเปื้อน'},
        {id: 87, cat: 'ของจิปาถะ', name: 'แม่เหล็กติดตู้เย็นฮอกไกโด', price: 900, description: 'แม่เหล็กติดตู้เย็นลายฮอกไกโด เก็บภาพความทรงจำ ตกแต่งห้องสวยงาม'},
        {id: 88, cat: 'ของจิปาถะ', name: 'พวงกุญแจฮอกไกโด (เครื่องเขียน)', price: 500, description: 'พวงกุญแจฮอกไกโด ขนาดเล็ก น่ารัก ใช้ติดกระเป๋าได้'},
        {id: 89, cat: 'ของจิปาถะ', name: 'ชุดสติกเกอร์ฮอกไกโด', price: 200, description: 'ชุดสติกเกอร์ฮอกไกโด หลายแบบ ติดโท้ง เก็บความทรงจำ'},
        {id: 90, cat: 'ของจิปาถะ', name: 'ปฏิทินฮอกไกโด', price: 1000, description: 'ปฏิทินฮอกไกโด ปีนี้ ภาพสวยทะลุจอทุกเดือน เก็บเก่าได้'},
        {id: 91, cat: 'เครื่องดื่ม', name: 'Sapporo Beer', price: 699, description: 'เบียร์ซัปโปโร รสคุ้นเคยจากญี่ปุ่น ค่ำหน้ากับมื้ออาหารทั่วไป'},
        {id: 92, cat: 'เครื่องดื่ม', name: 'Asahikawa Wine', price: 1000, description: 'ไวน์ท้องถิ่นจากเขต Asahikawa รสกลมกล่อม เหมาะกับอาหารทะเล'},
        {id: 93, cat: 'เครื่องดื่ม', name: 'Tokachi Wine', price: 900, description: 'ไวน์โตกาจิ รสสมดุล เหมาะกับอาหารทั่วไป'},
        {id: 94, cat: 'เครื่องดื่ม', name: 'Hokkaido Melon Soda', price: 1600, description: 'Melon Soda ฮอกไกโด รสหวานสดชื่น ดื่มเย็นๆ อร่อยเพลิดเพลิน'},
        {id: 95, cat: 'เครื่องดื่ม', name: 'Sapporo Milk', price: 1200, description: 'นมสดซัปโปโร เนื้อนมเข้มข้น เพื่ออาหารมื้อเช้า หรือเป็นเครื่องดื่มประจำวัน'},
        {id: 96, cat: 'เครื่องดื่ม', name: 'Hokkaido Coffee Milk', price: 600, description: 'กาแฟนมฮอกไกโด เข้มหอม ดื่มสำเร็จทันที สะดวกพกพา'},
        {id: 97, cat: 'เครื่องดื่ม', name: 'Yubari Melon Juice', price: 2000, description: 'น้ำชำระแตงโมยูบาริ รสหวาน เหมาะสำหรับมื้อเช้าหรือน้ำหลัก'},
        {id: 98, cat: 'เครื่องดื่ม', name: 'Haskap Juice', price: 1400, description: 'น้ำสกัดแฟรี่ Haskap ผลไม้ท้องถิ่น รสเปรี้ยวอร่อย ประโยชน์สุขภาพดี'},
        {id: 99, cat: 'เครื่องดื่ม', name: 'Hokkaido Apple Juice', price: 500, description: 'น้ำสกัดแอปเปิลฮอกไกโด รสหวานธรรมชาติ ผลไม้คุณภาพเลิศ'},
        {id: 100, cat: 'เครื่องดื่ม', name: 'Hokkaido Cocoa', price: 600, description: 'โกโก้ฮอกไกโด ผงละลายน้ำได้ดี รสหวานนวล เหมาะดื่มตอนเย็น'},
        {id: 202, cat: 'ขนม', name: 'คุกกี้ฮอกไกโด', price: 500, description: 'คุกกี้ฮอกไกโด กรุบกรอบ กลิ่นนม ห่อพกพา เหมาะเป็นของฝาก'},
    ];

    function getFolderFromCat(cat) {
        const map = {
            'อาหาร': '1Food', 'ขนม': '2Sweet', 'ของใช้เครื่องครัว': '3Kitchen utensils',
            'Skincare': '4Body and skin care', 'ของใช้ทั่วไป': '5Daily necessities',
            'เสื้อผ้า': '6clothing', 'เครื่องปรุง': '7seasoning', 'งานฝีมือ': '8Handmade',
            'ของจิปาถะ': '9Miscellaneous', 'เครื่องดื่ม': '10Drink'
        };
        return map[cat] || '1Food';
    }

    products.forEach(p => {
        const folder = getFolderFromCat(p.cat);
        p.imageCandidates = [
            `Img/${folder}/${p.id}.JPG`, `Img/${folder}/${p.id}.jpg`,
            `Img2/${folder}/${p.id}.JPG`, `Img2/${folder}/${p.id}.jpg`
        ];
    });

    let cart = [];
    const itemsPerPage = 6;
    let currentPage = 1;
    let currentCat = 'all';
    let filteredProducts = products;

 // ==================== แสดงสินค้า ====================
    function displayProducts(page = 1) {
        const grid = document.querySelector('.product-grid');
        grid.innerHTML = '';
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const pageProducts = filteredProducts.slice(start, end);

        pageProducts.forEach(product => {
            const div = document.createElement('div');
            div.className = 'product';

            const imgEl = document.createElement('img');
            imgEl.alt = product.name;
            const candidates = product.imageCandidates || [];
            imgEl.dataset.imgIndex = '0';
            imgEl.src = candidates[0] || 'https://via.placeholder.com/300x300/cccccc/666666?text=ไม่มีรูป';
            imgEl.onerror = function() {
                let idx = parseInt(this.dataset.imgIndex || '0', 10) + 1;
                if (candidates[idx]) {
                    this.dataset.imgIndex = String(idx);
                    this.src = candidates[idx];
                } else {
                    this.onerror = null;
                    this.src = 'https://via.placeholder.com/300x300/cccccc/666666?text=ไม่มีรูป';
                }
            };

            const title = document.createElement('h3');
            title.textContent = product.name;
            imgEl.style.cursor = 'pointer';
            title.style.cursor = 'pointer';
            imgEl.onclick = () => showProductModal(product);
            title.onclick = () => showProductModal(product);

            const price = document.createElement('p');
            price.textContent = `${product.price} บาท`;

            const btn = document.createElement('button');
            btn.textContent = 'ใส่ตะกร้า';
            btn.onclick = () => addToCart(product.id);

            div.appendChild(imgEl);
            div.appendChild(title);
            div.appendChild(price);
            div.appendChild(btn);
            grid.appendChild(div);
        });
        displayPagination();
    }

    // ==================== Modal รายละเอียดสินค้า ====================
    function showProductModal(product) {
        const modal = document.getElementById('product-modal');
        const pmImage = modal.querySelector('#pm-image');
        const pmName = modal.querySelector('#pm-name');
        const pmCat = modal.querySelector('#pm-cat');
        const pmPrice = modal.querySelector('#pm-price');
        const pmDesc = modal.querySelector('#pm-desc');
        const pmAddBtn = modal.querySelector('#pm-add-btn');

        pmName.textContent = product.name;
        pmCat.textContent = `หมวด: ${product.cat}`;
        pmPrice.textContent = `${product.price.toLocaleString()} บาท`;
        pmDesc.textContent = product.description || 'ไม่มีคำอธิบาย';

        const candidates = product.imageCandidates || [];
        pmImage.dataset.imgIndex = '0';
        pmImage.src = candidates[0] || 'https://via.placeholder.com/400x400/cccccc/666666?text=ไม่มีรูป';
        pmImage.onerror = function() {
            let idx = parseInt(this.dataset.imgIndex || '0', 10) + 1;
            if (candidates[idx]) {
                this.dataset.imgIndex = String(idx);
                this.src = candidates[idx];
            } else {
                this.onerror = null;
                this.src = 'https://via.placeholder.com/400x400/cccccc/666666?text=ไม่มีรูป';
            }
        };

        pmAddBtn.onclick = () => {
            pmAddBtn.style.transform = 'scale(0.95)';
            pmAddBtn.textContent = 'เพิ่มแล้ว';
            pmAddBtn.style.background = 'linear-gradient(135deg, #27ae60, #2ecc71)';
            addToCart(product.id);
            setTimeout(() => {
                pmAddBtn.textContent = 'ใส่ตะกร้า';
                pmAddBtn.style.background = '';
                pmAddBtn.style.transform = '';
                modal.style.display = 'none';
                document.body.style.overflow = '';
            }, 700);
        };

        document.body.style.overflow = 'hidden';
        modal.style.display = 'block';
    }

    // ==================== Pagination ====================
    function displayPagination() {
        const pagination = document.querySelector('.pagination');
        pagination.innerHTML = '';
        const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

        const prevBtn = document.createElement('button');
        prevBtn.textContent = 'Previous';
        prevBtn.disabled = currentPage === 1;
        prevBtn.onclick = () => { if (currentPage > 1) { currentPage--; displayProducts(currentPage); } };
        pagination.appendChild(prevBtn);

        for (let i = 1; i <= totalPages; i++) {
            const btn = document.createElement('button');
            btn.textContent = i;
            if (i === currentPage) btn.classList.add('active');
            btn.onclick = () => { currentPage = i; displayProducts(i); };
            pagination.appendChild(btn);
        }

        const nextBtn = document.createElement('button');
        nextBtn.textContent = 'Next';
        nextBtn.disabled = currentPage === totalPages;
        nextBtn.onclick = () => { if (currentPage < totalPages) { currentPage++; displayProducts(currentPage); } };
        pagination.appendChild(nextBtn);
    }

    // ==================== หมวดหมู่ + ค้นหา ====================
    document.querySelectorAll('.cat-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active-cat'));
            btn.classList.add('active-cat');
            currentCat = btn.dataset.cat;
            filteredProducts = currentCat === 'all' ? products : products.filter(p => p.cat === currentCat);
            currentPage = 1;
            displayProducts();
        });
    });
    document.querySelector('.cat-btn[data-cat="all"]').classList.add('active-cat');

    document.getElementById('search-input').addEventListener('input', () => {
        const query = document.getElementById('search-input').value.toLowerCase();
        filteredProducts = products.filter(p =>
            (currentCat === 'all' || p.cat === currentCat) &&
            p.name.toLowerCase().includes(query)
        );
        currentPage = 1;
        displayProducts();
    });
    // ========= เปิด "เกี่ยวกับเรา" ทั้งจากเมนูและ footer =========
    document.querySelectorAll('#about-trigger, #about-trigger-footer').forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault(); // ป้องกันการกระโดดหน้า
            const aboutModal = document.getElementById('about-modal');
            aboutModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });
    
    // ==================== ตะกร้า ====================
    window.addToCart = function(id) {
        const product = products.find(p => p.id === id);
        const item = cart.find(i => i.id === id);
        if (item) item.quantity++;
        else cart.push({ ...product, quantity: 1 });
        updateCart();
    };

    window.removeFromCart = function(id) {
        cart = cart.filter(i => i.id !== id);
        updateCart();
    };

    window.increaseQuantity = function(id) {
        cart.find(i => i.id === id).quantity++;
        updateCart();
    };

    window.decreaseQuantity = function(id) {
        const item = cart.find(i => i.id === id);
        item.quantity--;
        if (item.quantity <= 0) removeFromCart(id);
        else updateCart();
    };

    function updateCart() {
        document.getElementById('cart-count').textContent = cart.reduce((s, i) => s + i.quantity, 0);
        const itemsDiv = document.getElementById('cart-items');
        itemsDiv.innerHTML = '';
        let total = 0;

        if (cart.length === 0) {
            itemsDiv.innerHTML = '<p style="text-align:center;padding:30px;color:#999">ตะกร้าว่างเปล่า</p>';
            document.getElementById('total-price').textContent = '0';
            return;
        }

        const table = document.createElement('table');
        table.innerHTML = `<thead><tr><th>สินค้า</th><th>จำนวน</th><th>ราคา</th><th>ลบ</th></tr></thead><tbody></tbody>`;
        const tbody = table.querySelector('tbody');

        cart.forEach(item => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${item.name}</td>
                <td style="text-align:center;">
                    <button class="qty-btn qty-minus" onclick="decreaseQuantity(${item.id})">-</button>
                    <span class="qty-display">${item.quantity}</span>
                    <button class="qty-btn qty-plus" onclick="increaseQuantity(${item.id})">+</button>
                </td>
                <td><strong>${(item.price * item.quantity).toLocaleString()} บาท</strong></td>
                <td><button class="remove-btn" onclick="removeFromCart(${item.id})">ลบ</button></td>
            `;
            tbody.appendChild(tr);
            total += item.price * item.quantity;
        });

        itemsDiv.appendChild(table);
        document.getElementById('total-price').textContent = total.toLocaleString();
    }

    // ==================== สำคัญที่สุด: ใบเสร็จเด้งเฉพาะตอนกด "ชำระเงิน" ====================
    document.querySelector('.snow-modal-content').addEventListener('click', function(e) {
        if (e.target && e.target.classList.contains('checkout-btn-official')) {
            if (cart.length === 0) {
                alert('ตะกร้าของคุณว่างเปล่า');
                return;
            }

            const receiptNo = 'TR' + Math.floor(100000 + Math.random() * 900000);
            const now = new Date();
            const dateStr = now.toLocaleString('th-TH');

            let itemsHtml = '';
            cart.forEach(item => {
                itemsHtml += `<tr>
                    <td style="padding:8px 0">${item.name}</td>
                    <td style="text-align:center">${item.quantity}</td>
                    <td style="text-align:right">${(item.price * item.quantity).toLocaleString()} ฿</td>
                </tr>`;
            });

            const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

            const receiptHtml = `<!DOCTYPE html>
            <html><head><meta charset="utf-8"><title>ใบเสร็จ TunaRoji</title>
            <style>
                body{font-family:Segoe UI,sans-serif;background:#f8f9fa;color:#333;padding:30px}
                .receipt{max-width:500px;margin:0 auto;background:white;padding:25px;border:2px dashed #333;border-radius:12px;box-shadow:0 4px 20px rgba(0,0,0,0.1)}
                h2{text-align:center;margin:0 0 10px;color:#2c3e50}
                .center{text-align:center}
                table{width:100%;margin:15px 0;border-collapse:collapse}
                th,td{padding:8px 0;border-bottom:1px solid #eee}
                .total{font-weight:bold;font-size:18px;color:#27ae60}
                .print-btn{display:inline-block;margin-top:20px;padding:12px 24px;background:#27ae60;color:white;border-radius:8px;text-decoration:none}
            </style>
            </head><body>
            <div class="receipt">
                <div class="center"><h2>TunaRoji</h2><small>กรุณานำใบนี้ไปยื่นที่แคชเชียร์......ในฝันนะจ้ะ</small></div>
                <hr style="border:1px dashed #ddd;margin:20px 0">
                <div><strong>ID รับสินค้า:</strong> ${receiptNo}</div>
                <div><strong>วันที่:</strong> ${dateStr}</div>
                <table><thead><tr><th>สินค้า</th><th style="text-align:center">จำนวน</th><th style="text-align:right">ราคา</th></tr></thead><tbody>${itemsHtml}</tbody></table>
                <hr style="border:1px dashed #ddd;margin:20px 0">
                <div style="text-align:right;font-size:20px"><strong>รวมทั้งสิ้น ${total.toLocaleString()} ฿</strong></div>
                <div class="center" style="margin-top:25px">
                    <div style="font-size:18px;margin-bottom:10px">ขอบคุณที่อุดหนุนเรา! TunaRoji</div>
                    <a href="#" class="print-btn" onclick="window.print();return false;">พิมพ์ใบเสร็จ</a>
                </div>
            </div>
            </body></html>`;

            const win = window.open('', '_blank', 'width=650,height=900');
            if (win) {
                win.document.write(receiptHtml);
                win.document.close();
            } else {
                alert('กรุณาอนุญาต Pop-up');
            }

            // ล้างตะกร้า
            cart = [];
            updateCart();
            document.getElementById('cart-modal').style.display = 'none';
            document.body.style.overflow = '';
        }
    });

    // ==================== เปิด/ปิด Modal ====================
    document.getElementById('cart-btn').onclick = () => {
        document.getElementById('cart-modal').style.display = 'block';
        updateCart();
        document.body.style.overflow = 'hidden';
    };

    document.querySelectorAll('.modal .close').forEach(btn => {
        btn.onclick = () => {
            btn.closest('.modal').style.display = 'none';
            document.body.style.overflow = '';
        };
    });

    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {  // คลิกที่พื้นหลังเท่านั้น
                this.style.display = 'none';
                document.body.style.overflow = '';
            }
        });
    });

    // ==================== เริ่มต้น ====================
    displayProducts();
    updateCart();

    // สไลด์แบนเนอร์
    let slideIndex = 0;
    const slides = document.querySelectorAll('.slide');
    setInterval(() => {
        slides.forEach(s => s.classList.remove('active'));
        slides[slideIndex].classList.add('active');
        slideIndex = (slideIndex + 1) % slides.length;
    }, 4000);
    });

    // ==================== TRANSLATION DICTIONARY ====================
    const translations = {
        TH: {
            'all': 'ทั้งหมด',
            'food': 'อาหาร',
            'sweets': 'ขนม',
            'kitchen': 'ของใช้เครื่องครัว',
            'skincare': 'Skincare',
            'necessities': 'ของใช้ทั่วไป',
            'clothing': 'เสื้อผ้า',
            'seasoning': 'เครื่องปรุง',
            'handmade': 'งานฝีมือ',
            'miscellaneous': 'ของจิปาถะ',
            'beverages': 'เครื่องดื่ม',
            'search_placeholder': 'ค้นหาสินค้า...',
            'add_to_cart': 'ใส่ตะกร้า',
            'cart_title': 'ตะกร้าสินค้า',
            'total': 'รวมทั้งสิ้น',
            'empty_cart': 'ตะกร้าว่างเปล่า',
            'about': 'เกี่ยวกับเรา',
            'home': 'หน้าหลัก',
            'products': 'สินค้า',
            'checkout': 'ชำระเงิน',
            'quantity': 'จำนวน',
            'price': 'ราคา',
            'remove': 'ลบ',
            'category': 'หมวด'
        },
        EN: {
            'all': 'All',
            'food': 'Food',
            'sweets': 'Sweets',
            'kitchen': 'Kitchen',
            'skincare': 'Skincare',
            'necessities': 'Necessities',
            'clothing': 'Clothing',
            'seasoning': 'Seasoning',
            'handmade': 'Handmade',
            'miscellaneous': 'Miscellaneous',
            'beverages': 'Beverages',
            'search_placeholder': 'Search products...',
            'add_to_cart': 'Add to Cart',
            'cart_title': 'Shopping Cart',
            'total': 'Total',
            'empty_cart': 'Your cart is empty',
            'about': 'About Us',
            'home': 'Home',
            'products': 'Products',
            'checkout': 'Checkout',
            'quantity': 'Quantity',
            'price': 'Price',
            'remove': 'Remove',
            'category': 'Category'
        }
    };

    // ==================== DARK MODE & LANGUAGE TOGGLE ====================
    const darkModeBtn = document.getElementById('dark-mode-btn');
    const langBtn = document.getElementById('lang-btn');
    const htmlElement = document.documentElement;
    
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    let currentLanguage = localStorage.getItem('language') || 'TH';
    
    if (savedDarkMode) {
        document.body.classList.add('dark-mode');
        darkModeBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    updateLanguage(currentLanguage);
    
    function updateLanguage(lang) {
        currentLanguage = lang;
        htmlElement.lang = lang.toLowerCase();
        localStorage.setItem('language', lang);
        
        const catButtons = document.querySelectorAll('.cat-btn');
        const categoryMap = {
            'all': 'all',
            'อาหาร': 'food',
            'ขนม': 'sweets',
            'ของใช้เครื่องครัว': 'kitchen',
            'Skincare': 'skincare',
            'ของใช้ทั่วไป': 'necessities',
            'เสื้อผ้า': 'clothing',
            'เครื่องปรุง': 'seasoning',
            'งานฝีมือ': 'handmade',
            'ของจิปาถะ': 'miscellaneous',
            'เครื่องดื่ม': 'beverages'
        };
        
        catButtons.forEach(btn => {
            const dataAttr = btn.getAttribute('data-cat');
            const translationKey = categoryMap[dataAttr];
            if (translationKey && translations[lang][translationKey]) {
                btn.textContent = translations[lang][translationKey];
            }
        });
        
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            searchInput.placeholder = translations[lang]['search_placeholder'];
        }
        
        const cartTitle = document.querySelector('.modal-title');
        if (cartTitle && cartTitle.textContent.includes('ตะกร้า') || cartTitle.textContent.includes('Cart')) {
            cartTitle.textContent = translations[lang]['cart_title'];
        }
        
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            const text = link.textContent.trim();
            if (text === 'หน้าหลัก' || text === 'Home') {
                link.textContent = translations[lang]['home'];
            } else if (text === 'สินค้า' || text === 'Products') {
                link.textContent = translations[lang]['products'];
            } else if (text === 'เกี่ยวกับเรา' || text === 'About Us') {
                link.textContent = translations[lang]['about'];
            }
        });
        
        if (lang === 'EN') {
            langBtn.querySelector('.lang-text').textContent = 'EN';
        } else {
            langBtn.querySelector('.lang-text').textContent = 'TH';
        }
    }
    
    darkModeBtn.addEventListener('click', () => {
        const isDarkMode = document.body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', isDarkMode);
        
        if (isDarkMode) {
            darkModeBtn.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            darkModeBtn.innerHTML = '<i class="fas fa-moon"></i>';
        }
    });
    
    langBtn.addEventListener('click', () => {
        const newLang = currentLanguage === 'TH' ? 'EN' : 'TH';
        updateLanguage(newLang);
    });
