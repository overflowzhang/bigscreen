package org.jeecg.modules.bigscreen.bigscreenMock;

import lombok.extern.slf4j.Slf4j;
import org.apache.commons.io.IOUtils;
import org.jeecg.common.api.vo.Result;
import org.springframework.core.io.ClassPathResource;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.swing.filechooser.FileSystemView;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/big/screen/templat/api")
@Slf4j
public class BigscreenMockController {

	private final String JSON_PATH = "static/bigscreen/template3/json";

	@GetMapping(value = "/addressSearch")
	public String addressSearch(@RequestParam(name = "pageNo", defaultValue = "0") Integer pageNo, @RequestParam(name = "pageSize", defaultValue = "10") Integer pageSize,@RequestParam(name = "addressType") String addressType, @RequestParam(name = "addressName") String addressName) {
		return readJson(JSON_PATH+"/addressSearchResult"+pageNo+".json");
	}
	@GetMapping(value = "/chemicalSearch")
	public String chemicalSearch(@RequestParam(name = "pageNo", defaultValue = "0") Integer pageNo, @RequestParam(name = "pageSize", defaultValue = "10") Integer pageSize,@RequestParam(name = "codeType") String codeType, @RequestParam(name = "codeValue") String codeValue) {
		return readJson(JSON_PATH+"/chemicalSearchResult"+pageNo+".json");
	}
	@GetMapping(value = "/corporationsSearch")
	public String corporationsSearch(@RequestParam(name = "pageNo", defaultValue = "0") Integer pageNo, @RequestParam(name = "pageSize", defaultValue = "10") Integer pageSize,@RequestParam(name = "corporationType") String corporationType, @RequestParam(name = "corporationName") String corporationName, @RequestParam(name = "codeValue") String codeValue) {
		return readJson(JSON_PATH+"/corporationsSearchResult"+pageNo+".json");
	}
	@GetMapping(value = "/workOrdersSearch")
	public String workOrdersSearch(@RequestParam(name = "pageNo", defaultValue = "0") Integer pageNo, @RequestParam(name = "pageSize", defaultValue = "10") Integer pageSize,@RequestParam(name = "workOrderId") String workOrderId, @RequestParam(name = "userName") String userName, @RequestParam(name = "projectId") String projectId) {
		return readJson(JSON_PATH+"/workOrdersSearchResult"+pageNo+".json");
	}
	@GetMapping(value = "/alarmMessageList")
	public String alarmMessageList(@RequestParam(name = "pageNo", defaultValue = "0") Integer pageNo, @RequestParam(name = "pageSize", defaultValue = "10") Integer pageSize,@RequestParam(name = "workOrderId") String workOrderId, @RequestParam(name = "userName") String userName, @RequestParam(name = "projectId") String projectId) {
		return readJson(JSON_PATH+"/alarmMessage"+pageNo+".json");
	}
	@GetMapping(value = "/activeFacilitatorList")
	public String activeFacilitatorList(@RequestParam(name = "pageNo", defaultValue = "0") Integer pageNo, @RequestParam(name = "pageSize", defaultValue = "10") Integer pageSize,@RequestParam(name = "level") String level) {
		return readJson(JSON_PATH+"/activeFacilitatorList"+pageNo+".json");
	}
	
	/**
	 * 读取json格式文件
	 * @param jsonSrc
	 * @return
	 */
	private String readJson(String jsonSrc) {
		String json = "";
		try {
			ClassPathResource cpr = new ClassPathResource(jsonSrc);
			byte[] bdata = FileCopyUtils.copyToByteArray(cpr.getInputStream());
			json = new String(bdata, StandardCharsets.UTF_8);
			//File jsonFile = ResourceUtils.getFile(jsonSrc);
			//json = FileUtils.re.readFileToString(jsonFile);
			//换个写法，解决springboot读取jar包中文件的问题
//			InputStream stream = getClass().getClassLoader().getResourceAsStream(jsonSrc);
//			json = IOUtils.toString(stream,"UTF-8");
		} catch (IOException e) {
			log.error(e.getMessage(),e);
		}
		return json;
	}

}
